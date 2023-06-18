import { Component } from "react";

type Props = {
  cliente: string;
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
};

export default class DetalhesPet extends Component<Props> {
  render() {
    const { cliente ,nome, tipo, raca, genero } = this.props;
    return (
      <div>
        <h1>Detalhes do Pet</h1>
        <p>Tutor: {cliente}</p>
        <p>Nome: {nome}</p>
        <p>Tipo: {tipo}</p>
        <p>Raça: {raca}</p>
        <p>Gênero: {genero}</p>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Editar</button>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Excluir</button>
        </div>
      </div>
    );
  }
}