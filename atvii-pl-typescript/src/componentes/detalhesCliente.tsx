import { Component } from "react";

type props = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  email: string;
};

export default class DetalhesCliente extends Component<props>{
    render() {
        let nome = this.props.nome;
        let nomeSocial = this.props.nomeSocial;
        let cpf = this.props.cpf;
        let email = this.props.email;
        return(
            <div>
                <h1>Detalhes do Cliente</h1>
                <p>Nome: {nome}</p>
                <p>Nome Social: {nomeSocial}</p>
                <p>CPF: {cpf}</p>
                <p>Email: {email}</p>
            </div>
        )
    }

}