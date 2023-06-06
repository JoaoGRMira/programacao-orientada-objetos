/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoProduto from "./formularioConsumoProduto";
import FormularioConsumoServico from "./formularioConsumoServico";
import ListaCliente from "./listaCliente";
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

export default function Roteador() {
    const [tela, setTela] = useState('Cadastros')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } 
        if (tela === 'Cadastros') {
        return (
            <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
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
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Solicitar produto/serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h1>Solicitar um produto</h1>
                    <FormularioConsumoProduto tema="#e3f2fd" />
                    <h1>Solicitar um serviço</h1>
                    <FormularioConsumoServico tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Consumos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h1>Lista dos 10 clientes que mais consumiram produtos/serviços, em quantidade</h1>
                    <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
                    <h1>Lista geral dos serviços/produtos mais consumidos</h1>
                    <ListaGeralMaisConsumidos tema="#e3f2fd" />
                    <h1>Lista dos serviços/produtos mais consumidos por tipo e raça de pets</h1>
                    <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
                    <h1>Lista dos 5 clientes que mais consumiram em valor</h1>
                    <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'DetalhesCliente') {
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
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <DetalhesCliente {...detalhesCliente} />
                </>
            )
        }
        if (tela === 'DetalhesPet') {
            const detalhesPet = {
                cliente: 'Cliente',
                nome: 'Pet',
                tipo: 'Tipo',
                raca: 'Raça',
                genero: 'Gênero'
              };
        
              return (
                <>
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <DetalhesPet {...detalhesPet} />
                </>
            )
        }
        if (tela === 'DetalhesProduto') {
            const detalhesProduto = {
                nome: 'Produto',
                valor: 'Valor'
              };
        
              return (
                <>
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <DetalhesProduto {...detalhesProduto} />
                </>
            )
        } else {
            const detalhesServico = {
                nome: 'Servico',
                valor: 'Valor'
              };
        
              return (
                <>
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Solicitar produto/serviço', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <DetalhesServico {...detalhesServico} />
                </>
            )
        }
    }

    return (
        construirView()
    )
}