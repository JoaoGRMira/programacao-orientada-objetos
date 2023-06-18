/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from 'react'
import DetalhesServico from "../detalhes/detalhesServico";

export default function ListaServico(props) {
    const [servicos, setServicos] = useState([]);
    const [servicoSelecionado, setServicoSelecionado] = useState(null);
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    const tema = props.tema;
  
    const selecionarServico = (cliente) => {
      setServicoSelecionado(cliente);
      setExibirDetalhes(true);
    };
  
    const voltarLista = () => {
      setServicoSelecionado(null);
      setExibirDetalhes(false);
    };
  
    useEffect(() => {
      axios.get("http://localhost:3001/listagemServicos")
        .then(response => {
          setServicos(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    return (
      <div className="container-fluid" style={{ marginLeft: "30px" }}>
      {exibirDetalhes ? (
        <DetalhesServico servico={servicoSelecionado} voltarLista={voltarLista} />
      ) : (
        <div className="list-group" style={{ width: "600px" }}>
          {servicos.map(servico => (
            <a
              key={servico.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => selecionarServico(servico)}
            >
              {servico.nome}
            </a>
          ))}
        </div>
      )}
    </div>
    )
}