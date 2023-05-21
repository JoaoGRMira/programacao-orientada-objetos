import { Component } from "react";

type Props = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  email: string;
};

export default class DetalhesCliente extends Component<Props> {
  render() {
    const { nome, nomeSocial, cpf, email } = this.props;
    return (
      <div>
        <h1>Detalhes do Cliente</h1>
        <p>Nome: {nome}</p>
        <p>Nome Social: {nomeSocial}</p>
        <p>CPF: {cpf}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}
