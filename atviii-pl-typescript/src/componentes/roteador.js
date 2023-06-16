import React, { useState } from "react";
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
  const [tela, setTela] = useState("Cadastrar");
  const [exibirDropdown, setExibirDropdown] = useState(false);

  const selecionarView = (valor, e) => {
    e.preventDefault();
    if (valor === "Cadastrar") {
      setExibirDropdown(!exibirDropdown);
    } else {
      setTela(valor);
    }
  };

  const construirView = () => {
    if (tela === "Cadastrar") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um cliente</h2>
            <FormularioCadastroCliente tema="#e3f2fd" />
          </>
        );
    }
    if (tela === "Cliente") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um cliente</h2>
            <FormularioCadastroCliente tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Pet") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um Pet</h2>
            <FormularioCadastroPet tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Produto") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um produto</h2>
            <FormularioCadastroProduto tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Serviço") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar um serviço</h2>
            <FormularioCadastroServico tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Consumir") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Consumir um produto</h2>
            <FormularioConsumoProduto tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Consumir produto") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Consumir um produto</h2>
            <FormularioConsumoProduto tema="#e3f2fd" />
          </>
        );
      }   
      if (tela === "Consumir serviço") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Consumir um serviço</h2>
            <FormularioConsumoServico tema="#e3f2fd" />
          </>
        );
      }
    if (tela === "Listagem") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Listagem de Clientes</h2>
          <ListaCliente tema="#e3f2fd" />
        </>
      );
    } 
    if (tela === "Lista clientes") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de clientes</h2>
            <ListaCliente tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Lista pets") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de pets</h2>
            <ListaPet tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Lista produtos") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de produtos</h2>
            <ListaProduto tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Lista serviços") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Listagem de serviços</h2>
            <ListaServico tema="#e3f2fd" />
          </>
        );
      }      
    else if (tela === "Consumos") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Lista 10 clientes que mais consumiram em quantidade</h2>
          <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
        </>
      );
    }
    if (tela === "10 clientes que mais consumiram em quantidade") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista 10 clientes que mais consumiram em quantidade</h2>
            <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "5 clientes que mais consumiram em valor") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista 5 clientes que mais consumiram em valor</h2>
            <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Serviços/produtos mais consumidos") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista geral dos serviços/produtos mais consumidos</h2>
            <ListaGeralMaisConsumidos tema="#e3f2fd" />
          </>
        );
      }
      if (tela === "Serviços/produtos mais consumidos por tipo e raça de pets") {
        return (
          <>
            <BarraNavegacao
              seletorView={selecionarView}
              tema="#e3f2fd"
              botoes={[
                "Cadastrar",
                "Consumir",
                "Listagem",
                "Consumos"
              ]}
            />
            <h2 style={{ marginLeft: "40px" }}>Lista dos serviços/produtos mais consumidos por tipo e raça de pets</h2>
            <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
          </>
        );
      }


      else if (tela === "DetalhesCliente") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Cliente</h2>
          <DetalhesCliente tema="#e3f2fd" />
        </>
      );
    } else if (tela === "DetalhesPet") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Pet</h2>
          <DetalhesPet tema="#e3f2fd" />
        </>
      );
    } else if (tela === "DetalhesProduto") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Produto</h2>
          <DetalhesProduto tema="#e3f2fd" />
        </>
      );
    } else if (tela === "DetalhesServico") {
      return (
        <>
          <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={[
              "Cadastrar",
              "Consumir",
              "Listagem",
              "Consumos"
            ]}
          />
          <h2 style={{ marginLeft: "40px" }}>Detalhes do Serviço</h2>
          <DetalhesServico tema="#e3f2fd" />
        </>
      );
    }
  };

  return <div>{construirView()}</div>;
}
