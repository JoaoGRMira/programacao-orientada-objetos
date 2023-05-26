import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastros/cadastroCliente";
import CadastroPet from "../negocio/cadastros/cadastroPet";
import CadastroProduto from "../negocio/cadastros/cadastroProduto";
import CadastroServico from "../negocio/cadastros/cadastroServico";
import ConsumirProduto from "../negocio/consumiveis/consumirProduto";
import ConsumirServico from "../negocio/consumiveis/consumirServico";
import EditorCliente from "../negocio/edicoes/editorCliente";
import EditorPet from "../negocio/edicoes/editorPet";
import EditorProduto from "../negocio/edicoes/editorProduto";
import EditorServico from "../negocio/edicoes/editorServicos";
import ListagemClientes from "../negocio/listagens/listagemClientes";
import ListagemConsPet from "../negocio/listagens/listagemConsPet";
import ListagemConsProdServ from "../negocio/listagens/listagemConsProdServ";
import ListagemConsQuant from "../negocio/listagens/listagemConsQuant";
import ListagemConsValor from "../negocio/listagens/listagemConsValor";
import ListagemConsumo from "../negocio/listagens/listagemConsumo";
import ListagemPets from "../negocio/listagens/listagemPets";
import ListagemProdutos from "../negocio/listagens/listagemProdutos";
import ListagemServicos from "../negocio/listagens/listagemServicos";
import Selecionador from "../negocio/selecionadores/selecionador";
import SelecionadorPet from "../negocio/selecionadores/selecionadorPet";
import SelecionadorProduto from "../negocio/selecionadores/selecionadorProduto";
import SelecionadorServico from "../negocio/selecionadores/selecionadorServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Excluir um cliente`);
    console.log(`4 - Editar um cliente`);
    console.log(`5 - Cadastrar Pet`);
    console.log(`6 - Listar todos os pets`);
    console.log(`7 - Excluir um pet`);
    console.log(`8 - Editar um pet`);
    console.log(`9 - Cadastrar Produto`);
    console.log(`10 - Listar todos os produtos`);
    console.log(`11 - Excluir um produto`);
    console.log(`12 - Editar um produto`);
    console.log(`13 - Solicitar um produto`);
    console.log(`14 - Cadastrar Serviço`);
    console.log(`15 - Listar todos os serviços`);
    console.log(`16 - Excluir um serviço`);
    console.log(`17 - Editar um serviço`);
    console.log(`18 - Solicitar um serviço`);
    console.log(`19 - Listar consumo de todos os clientes`);
    console.log(`20 - Listar os produtos e serviços mais consumidos`);
    console.log(`21 - Listar os 5 clientes que mais consumiram em valor`);
    console.log(`22 - Listar os 10 clientes que mais consumiram em quantidade`);
    console.log(`23 - Listar os produtos ou serviços mais consumidos por raça e tipo de pet`);
    console.log(`0 - Sair`);
    
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
            
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
            
        case 3:
            let cpf = entrada.receberTexto('Digite um CPF para exclusão: ')
            let selecionadorCliente = new Selecionador(empresa.getClientes)
            let cliente = selecionadorCliente.selecionar(cpf)
            
            let indice = empresa.getClientes.indexOf(cliente)
            delete empresa.getClientes[indice]
            break;

        case 4:
            let cpfEditar = entrada.receberTexto('Digite um CPF para edição: ')
            let selecionadorClienteEditar = new Selecionador(empresa.getClientes)
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar)
            
            let editor = new EditorCliente()
            editor.editar(clienteEditar)
            break;
            
        case 5:
            let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
            cadastroPet.cadastrar()
            break;
            
        case 6:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;

        case 7:
            let nomePet = entrada.receberTexto('Digite um pet para exclusão: ')
            let selecionadorPet = new SelecionadorPet(empresa.getPets)
            let pet = selecionadorPet.selecionarPet(nomePet)
            
            let indicePet = empresa.getPets.indexOf(pet)
            delete empresa.getPets[indicePet]
            break;

        case 8:
            let nomePetEditar = entrada.receberTexto('Digite um pet para edição: ')
            let selecionadorPetEditar = new SelecionadorPet(empresa.getPets)
            let petEditar = selecionadorPetEditar.selecionarPet(nomePetEditar)

            let editorPet = new EditorPet()
            editorPet.editar(petEditar)
            break;

        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;

        case 10:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
            
        case 11:
            let nomeProduto = entrada.receberTexto('Digite um produto para exclusão: ')
            let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos)
            let produto = selecionadorProduto.selecionarProduto(nomeProduto)
            
            let indiceProduto = empresa.getProdutos.indexOf(produto)
            delete empresa.getProdutos[indiceProduto]
            break;

        case 12:
            let nomeProdutoEditar = entrada.receberTexto('Digite um produto para edição: ')
            let selecionadorProdutoEditar = new SelecionadorProduto(empresa.getProdutos)
            let produtoEditar = selecionadorProdutoEditar.selecionarProduto(nomeProdutoEditar)

            let editorProduto = new EditorProduto()
            editorProduto.editar(produtoEditar)
            break;

        case 13:
            let consumirProduto = new ConsumirProduto(empresa.getProdutos, empresa.getClientes, empresa.getPets)
            consumirProduto.consumir()
            break;
            
        case 14:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
            
        case 15:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
                    
        case 16:
            let nomeServico = entrada.receberTexto('Digite um serviço para exclusão: ')
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let servico = selecionadorServico.selecionarServico(nomeServico)
            
            let indiceServico = empresa.getServicos.indexOf(servico)
            delete empresa.getServicos[indiceServico]
            break;

        case 17:
            let nomeServicoEditar = entrada.receberTexto('Digite um serviço para edição: ')
            let selecionadorServicoEditar = new SelecionadorServico(empresa.getServicos)
            let servicoEditar = selecionadorServicoEditar.selecionarServico(nomeServicoEditar)

            let editorServico = new EditorServico()
            editorServico.editar(servicoEditar)
            break;
                    
        case 18:
            let consumirServico = new ConsumirServico(empresa.getServicos, empresa.getClientes, empresa.getPets)
            consumirServico.consumir()
            break;

        case 19:
            let listagemConsumo = new ListagemConsumo(empresa.getClientes)
            listagemConsumo.listar()
            break;
                
        case 20:
            let listagemConsProdServ = new ListagemConsProdServ(empresa.getClientes)
            listagemConsProdServ.listar()
            break;

        case 21:
            let listagemConsValor = new ListagemConsValor(empresa.getClientes)
            listagemConsValor.listar()
            break;

        case 22:
            let listagemConsQuant = new ListagemConsQuant(empresa.getClientes)
            listagemConsQuant.listar()
            break;


        case 23:
            let listagemConsPet = new ListagemConsPet(empresa.getClientes)
            listagemConsPet.listar()
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;

        default:
            console.log(`Operação não entendida :(`)
    }
}