/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function DetalhesPet(props) {
  const { pet, voltarLista } = props;

  return (
    <div style={{ marginLeft: "40px", marginTop: "30px"}}>
      <p><b>Tutor:</b> {pet.tutor}</p>
      <p><b>Nome:</b> {pet.nome}</p>
      <p><b>Tipo:</b> {pet.tipo}</p>
      <p><b>Raça:</b> {pet.raca}</p>
      <p><b>Gênero:</b> {pet.genero}</p>

      <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px"}}>
        Editar
      </button>
      <button type="button" className="btn btn-danger" style={{ width: "100px", left:"10px" }}>
        Excluir
      </button>

      <button type="button" className="btn btn-secondary" style={{ marginLeft:'20px', width: "100px", left:"10px" }} onClick={voltarLista}>
        Voltar
      </button>
    </div>
  );
}
