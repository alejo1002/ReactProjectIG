import React from 'react'

export function Comentario(props){
  return (
    <div>
      <Foto nombre_imagen="Mi fotico"/>
      <label>Nombre del usuario:{props.nombre}</label>
      <button> Enviar </button>
    </div>
  );
}

export const Foto = (props) => {
  return (
    <div className="card">
      <div className="prj-imagen">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F532550724667470721%2F&psig=AOvVaw0cf6HN1P5wWi1Ha1ano8m4&ust=1582394925858000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjrh-Oe4-cCFQAAAAAdAAAAABAD" alt="" />
      </div>
      <span>{props.nombre_imagen}</span>
    </div>
  )
}


export const InformacionPersona = (props) => {
  return(
    <div className="">
      <label>Nombre: {props.nombre}</label>
      <label>Correo: {props.correo} </label>
      <img scr={props.url} alt="Img Info"/>
    </div>
  )
}