import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoProduto from "./formularioConsumoProduto";
import FormularioConsumoServico from "./formularioConsumoServico";
import ListaCliente from "./listaClientes";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import ListaClientesMaisConsumiramQuantidade from "./listaClientesMaisConsumiramQuantidade";
import ListaGeralMaisConsumidos from "./listaGeralMaisConsumidos";
import ListaServProdMaisConsumidosTipoRaca from "./listaServProdMaisConsumidosTipoRaca";
import ListaClientesMaisConsumiramValor from "./listaClientesMaisConsumiramValor";
import DetalhesCliente from "./detalhesCliente";
import DetalhesPet from "./detalhesPet";
import DetalhesProduto from "./detalhesProduto";
import DetalhesServico from "./detalhesServico";

type state = {
  tela: string,
  clienteSelecionado: null | string
  petSelecionado: null | string
};

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Cadastros",
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
        botoes={["Cadastros", "Solicitar produto/serviço", "Clientes", "Pets", "Produtos", "Serviços", "Consumos"]}
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


    if (this.state.tela === "Produtos") {
      return (
        <>
          {barraNavegacao}
          <ListaProduto tema="#e3f2fd" seletorView={this.selecionarView}/>
        </>
      );
    }

    if (this.state.tela === "Serviços") {
      return (
        <>
          {barraNavegacao}
          <ListaServico tema="#e3f2fd" seletorView={this.selecionarView}/>
        </>
      );
    }

    if (this.state.tela === "Solicitar produto/serviço") {
      return (
        <>
          {barraNavegacao}
          <h1>Solicitar um produto</h1>
          <FormularioConsumoProduto tema="#e3f2fd" />
          <h1>Solicitar um serviço</h1>
          <FormularioConsumoServico tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "Consumos") {
      return (
        <>
          {barraNavegacao}
          <h1>Lista dos 10 clientes que mais consumiram produtos/serviços, em quantidade</h1>
          <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
          <h1>Lista geral dos serviços/produtos mais consumidos</h1>
          <ListaGeralMaisConsumidos tema="#e3f2fd" />
          <h1>Lista dos serviços/produtos mais consumidos por tipo e raça de pets</h1>
          <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
          <h1>Lista dos 5 clientes que mais consumiram em valor</h1>
          <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
        </>
      );
    }

    if (this.state.tela === "DetalhesCliente") {
      const detalhesCliente = {
        nome: "Nome do cliente",
        nomeSocial: "Nome social",
        cpf: "000.000.000-00",
        rg: "00.000.000-0",
        produtosConsumidos: "produtos",
        servicosConsumidos: "serviços",
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

    if (this.state.tela === "DetalhesProduto") {
      const detalhesProduto = {
        nome: 'Produto',
        valor: 'Valor'
      };

      return (
        <>
          {barraNavegacao}
          <DetalhesProduto {...detalhesProduto} />
        </>
      );
    }

    if (this.state.tela === "DetalhesServico") {
      const detalhesServico = {
        nome: 'Servico',
        valor: 'Valor'
      };

      return (
        <>
          {barraNavegacao}
          <DetalhesServico {...detalhesServico} />
        </>
      );
    }

    return null;
  }
}
