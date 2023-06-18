/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from 'react'
import DetalhesPet from "../detalhes/detalhesPet";

export default function ListaPet(props) {
  const [pets, setClientes] = useState([]);
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [exibirDetalhes, setExibirDetalhes] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/listagemPets")
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const selecionarPet = (cliente) => {
    setPetSelecionado(cliente);
    setExibirDetalhes(true);
  };

  const voltarLista = () => {
    setPetSelecionado(null);
    setExibirDetalhes(false);
  };
    
    return (
      <div className="container-fluid" style={{ marginLeft: "30px" }}>
      {exibirDetalhes ? (
        <DetalhesPet pet={petSelecionado} voltarLista={voltarLista} />
      ) : (
        <div className="list-group" style={{ width: "600px" }}>
          {pets.map(pet => (
            <a
              key={pet.id}
              href="#"
              className="list-group-item list-group-item-action"
              onClick={() => selecionarPet(pet)}
            >
              {pet.nome}
            </a>
          ))}
        </div>
      )}
    </div>
    )
}