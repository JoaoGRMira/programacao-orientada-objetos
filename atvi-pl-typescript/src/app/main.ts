import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import EditorCliente from "../negocio/editorCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import Selecionador from "../negocio/selecionador";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar Serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Cadastrar Pet`);
    console.log(`8 - Listar todos os pets`);
    console.log(`9 - Excluir um cliente`);
    console.log(`10 - Editar um cliente`);
    console.log(`11 - Solicitar um produto`);
    console.log(`12- Solicitar um serviço`);
    console.log(`13 - Listar consumo de todos os clientes`);
    console.log(`14 - Listar os 10 clientes que mais consumiram em quantidade`);
    console.log(`15 - Listar os produtos e serviços mais consumidos`);
    console.log(`16 - Listar de produtos ou serviços mais consumidos por raça e tipo de pet`);
    console.log(`17 - Listar os 5 clientes que mais consumiram em valor`);
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
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 6:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 7:
            let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
            cadastroPet.cadastrar()
            break;
        case 8:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;
        case 9:
            let cpf = entrada.receberTexto('Digite um CPF para exclusão: ')
            let selecionadorCliente = new Selecionador(empresa.getClientes)
            let cliente = selecionadorCliente.selecionar(cpf)
            
            let indice = empresa.getClientes.indexOf(cliente)
            delete empresa.getClientes[indice]
            break;
        case 10:
            let cpfEditar = entrada.receberTexto('Digite um CPF para edição: ')
            let selecionadorClienteEditar = new Selecionador(empresa.getClientes)
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar)

            let editor = new EditorCliente()
            editor.editar(clienteEditar)
            break;
        case 11:
            
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}