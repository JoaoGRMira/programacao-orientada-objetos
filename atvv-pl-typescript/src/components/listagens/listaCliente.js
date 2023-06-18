/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from 'react';
import DetalhesCliente from "../detalhes/detalhesCliente";

export default function ListaCliente(props) {
  const [clientes, setClientes] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [exibirDetalhes, setExibirDetalhes] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/listagemClientes")
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const selecionarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setExibirDetalhes(true);
  };

  const voltarLista = () => {
    setClienteSelecionado(null);
    setExibirDetalhes(false);
  };

  return (
    <div className="container-fluid" style={{ marginLeft: "30px" }}>
      {exibirDetalhes ? (
        <DetalhesCliente cliente={clienteSelecionado} voltarLista={voltarLista} />
      ) : (
        <div className="list-group" style={{ width: "600px" }}>
          {clientes.map(cliente => (
            <a
              key={cliente.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => selecionarCliente(cliente)}
            >
              {cliente.nome}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
