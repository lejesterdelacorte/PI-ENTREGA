import React, { useEffect } from "react";
import style from './DetailType.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPoke, findId } from "../redux/action";

const Detail = (props) => {
  // console.log(props, 'PROSPS')
  const { id } = useParams();

  const dispatch = useDispatch();
  
  useEffect(() => {    // se ejecuta la accion cuando semonta el componente
    dispatch(findId(id));
    return () => dispatch(clearPoke());
  }, [dispatch, id]);


  
  const state = useSelector(state => state.pokeDetail);
  // console.log(state, 'state DET');

  if(state) {
    return (
      <div className={ style.type }>
        <div className={ style.title }>
          <h1>Detail Pokemon</h1>
        </div>
        <div className={ style.poke }>
          <div className= { style.typePoke }>
            <img src={ state.sprites } alt={state.name} />
            <h3>Name: { state.name }</h3>
            <h4>Type: { state.types }</h4>
            <h4>Height: { state.height }</h4>
            <h4>Attack: { state.attack }</h4>
            <h4>Defending: {state.defending }</h4>
            <h4>Speed: { state.speed }</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>NOT FOUND POKEMON</h2>
      </div>
    )
  }

};

export default Detail;