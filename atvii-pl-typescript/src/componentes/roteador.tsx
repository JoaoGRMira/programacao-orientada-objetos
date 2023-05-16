import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos', 'Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Cadastros') {
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
            )
        }
        if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }
    }
}