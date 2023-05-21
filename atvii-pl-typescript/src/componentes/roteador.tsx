import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import DetalhesCliente from "./detalhesCliente";
import DetalhesPet from "./detalhesPet";

type state = {
  tela: string,
  clienteSelecionado: null | string
  petSelecionado: null | string
};

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Clientes",
      clienteSelecionado: null,
      petSelecionado: null
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) {
    evento.preventDefault();
    this.setState({
      tela: novaTela,
      clienteSelecionado: evento.currentTarget.getAttribute("data-cliente-id"),
      petSelecionado: evento.currentTarget.getAttribute("data-pet-id"),
    });
  }

  render() {
    const barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#e3f2fd"
        botoes={["Clientes", "Cadastros", "Pets", "Produtos", "Serviços"]}
      />
    );

    if (this.state.tela === "Clientes") {
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="#e3f2fd" seletorView={this.selecionarView} />
        </>
      );
    }

    if (this.state.tela === "Cadastros") {
      return (
        <>
          {barraNavegacao}
          <h1>Cadastrar um cliente</h1>
          <FormularioCadastroCliente tema="#e3f2fd" />
          <h1>Cadastrar um pet</h1>
          <FormularioCadastroPet tema="#e3f2fd" />
          <h1>Cadastrar um produto</h1>
          <FormularioCadastroProduto tema="#e3f2fd" />
          <h1>Cadastrar um serviço</h1>
          <FormularioCadastroServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Pets") {
      return (
        <>
          {barraNavegacao}
          <ListaPet tema="#e3f2fd" seletorView={this.selecionarView}/>
        </>
      );
    }

    if (this.state.tela === "Serviços") {
      return (
        <>
          {barraNavegacao}
          <ListaServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Produtos") {
      return (
        <>
          {barraNavegacao}
          <ListaProduto tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "DetalhesCliente") {
      const detalhesCliente = {
        nome: "Nome do cliente",
        nomeSocial: "Nome social",
        cpf: "000.000.000-00",
        email: "cliente@email.com"
      };

      return (
        <>
          {barraNavegacao}
          <DetalhesCliente {...detalhesCliente} />
        </>
      );
    }

    if (this.state.tela === "DetalhesPet") {
      const detalhesPet = {
        cliente: 'Cliente',
        nome: 'Pet',
        tipo: 'Tipo',
        raca: 'Raça',
        genero: 'Gênero'
      };

      return (
        <>
          {barraNavegacao}
          <DetalhesPet {...detalhesPet} />
        </>
      );
    }

    return null;
  }
}
