/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";


export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos', 'Serviços']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } 
        if (tela === 'Cadastros') {
        return (
            <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos', 'Serviços']} />
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
        if (tela === 'Pets') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos', 'Serviços']} />
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos', 'Serviços']} />
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros', 'Pets', 'Produtos', 'Serviços']} />
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}