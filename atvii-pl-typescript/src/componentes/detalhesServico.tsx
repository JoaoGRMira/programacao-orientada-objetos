import { Component } from "react";

type Props = {
  nome: string;
  valor: string;
};

export default class DetalhesServico extends Component<Props> {
  render() {
    const { nome, valor } = this.props;
    return (
      <div style={{ marginLeft: "40px", marginTop: "30px"}}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Valor:</b> {valor}</p>

        <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px"}}>
          Editar
        </button>
        <button type="button" className="btn btn-danger" style={{ width: "100px", left:"10px" }}>
          Excluir
        </button>
      </div>
    );
  }
}
