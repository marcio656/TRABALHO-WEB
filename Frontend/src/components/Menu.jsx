import React from 'react';
export default function Menu({ setPagina }) {
    return (
        <div>
            <button onClick={() => setPagina('inicio')}>Início</button>
            <button onClick={() => setPagina('equipamentos')}>Equipamentos</button>
            <button onClick={() => setPagina('cidades')}>Cidades</button>
            <button onClick={() => setPagina('funcionarios')}>Funcionarios</button>
            <button onClick={() => setPagina('servicos')}>Servicos</button>
        </div>
    );
}