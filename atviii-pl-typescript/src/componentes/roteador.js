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
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h2 style={{ marginLeft: "40px" }}>
                        Listagem de Clientes
                    </h2>
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } 
        if (tela === 'Cadastros') {
        return (
            <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                <h2 style={{ marginLeft: "40px" }}>
                    Cadastrar um cliente
                </h2>
                <FormularioCadastroCliente tema="#e3f2fd" />
                <h2 style={{ marginLeft: "40px" }}>
                    Cadastrar um Pet
                </h2>
                <FormularioCadastroPet tema="#e3f2fd" />
                <h2 style={{ marginLeft: "40px" }}>
                    Cadastrar um produto
                </h2>
                <FormularioCadastroProduto tema="#e3f2fd" />
                <h2 style={{ marginLeft: "40px" }}>
                    Cadastrar um serviço
                </h2>
                <FormularioCadastroServico tema="#e3f2fd" />
            </>
        )
        } 
        if (tela === 'Pets') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h2 style={{ marginLeft: "40px" }}>
                        Listagem de Pets
                    </h2>
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h2 style={{ marginLeft: "40px" }}>
                        Listagem de Produtos
                    </h2>
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h2 style={{ marginLeft: "40px" }}>
                        Listagem de Serviços
                    </h2>
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Consumir') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h2 style={{ marginLeft: "40px" }}>
                        Consumir um produto
                    </h2>
                    <FormularioConsumoProduto tema="#e3f2fd" />
                    <h2 style={{ marginLeft: "40px" }}>
                        Consumir um serviço
                    </h2>
                    <FormularioConsumoServico tema="#e3f2fd" />
                </>
            )
        }
        if (tela === 'Consumos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                    <h2 style={{ marginLeft: "40px" }}>
                        Lista dos 10 clientes que mais consumiram em quantidade
                    </h2>
                    <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
                    <h2 style={{ marginLeft: "40px" }}>
                        Lista geral dos serviços/produtos mais consumidos
                    </h2>
                    <ListaGeralMaisConsumidos tema="#e3f2fd" />
                    <h2 style={{ marginLeft: "40px" }}>
                        Lista dos serviços/produtos mais consumidos por tipo e raça de pets
                    </h2>
                    <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
                    <h2 style={{ marginLeft: "40px" }}>
                        Lista dos 5 clientes que mais consumiram em valor
                    </h2>
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
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <h2 style={{ marginLeft: "40px" }}>
                    Detalhes do Cliente
                  </h2>
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
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <h2 style={{ marginLeft: "40px" }}>
                    Detalhes do Pet
                  </h2>
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
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <h2 style={{ marginLeft: "40px" }}>
                    Detalhes do Produto
                  </h2>
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
                  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Consumir', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Consumos']} />
                  <h2 style={{ marginLeft: "40px" }}>
                    Detalhes do Serviço
                  </h2>
                  <DetalhesServico {...detalhesServico} />
                </>
            )
        }
    }

    return (
        construirView()
    )
}