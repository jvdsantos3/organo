import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const aoDigatado = (evento) => {
        props.aoAlterado(evento.target.value);
    }   

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigatado} placeholder={placeholderModificado} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto