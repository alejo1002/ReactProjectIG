import React from 'react'

export function Item(props){
    return (
        <div className="card">
            <label>Nuevo Item con id {props.idItem}</label>
            <button className="btn btn-success">Seleccionar</button>
        </div>
    )
}

export const Item2 = (props) => {
    return <span>Nuevo Item 2</span>
}