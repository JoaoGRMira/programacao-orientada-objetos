import { Component } from "react";

type Props = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string;
  produtosConsumidos: string;
  servicosConsumidos: string;
};

export default class DetalhesCliente extends Component<Props> {
  render() {
    const { nome, nomeSocial, cpf, rg, produtosConsumidos, servicosConsumidos } = this.props;
    return (
      <div>
        <h1>Detalhes do Cliente</h1>
        <p>Nome: {nome}</p>
        <p>Nome Social: {nomeSocial}</p>
        <p>CPF: {cpf}</p>
        <p>RG: {rg}</p>
        <p>Produtos consumidos: {produtosConsumidos}</p>
        <p>Serviços consumidos: {servicosConsumidos}</p>
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
