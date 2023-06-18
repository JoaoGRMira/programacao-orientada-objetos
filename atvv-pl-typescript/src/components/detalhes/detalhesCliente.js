/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function DetalhesCliente(props) {
  const { cliente, voltarLista } = props;

  return (
    <div style={{ marginLeft: "40px", marginTop: "30px"}}>
      <p><b>Nome:</b> {cliente.nome}</p>
      <p><b>Nome Social:</b> {cliente.nomeSocial}</p>
      <p><b>CPF:</b> {cliente.cpf}</p>
      <p><b>Data de emissão CPF:</b> {cliente.dataCpf}</p>
      <p><b>RG:</b> {cliente.rg}</p>
      <p><b>Data de emissão RG:</b> {cliente.dataRg}</p>
      <p><b>Telefone:</b> {cliente.telefone}</p>
      <p><b>Produtos consumidos:</b> {cliente.produtosConsumidos}</p>
      <p><b>Serviços consumidos:</b> {cliente.servicosConsumidos}</p>

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
