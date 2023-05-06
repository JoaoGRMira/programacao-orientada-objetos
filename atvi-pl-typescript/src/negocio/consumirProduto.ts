import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"
import Selecionador from "./selecionador"
import SelecionadorProduto from "./selecionadorProduto"

export default class ConsumirProduto extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício da requisição de produto`);
        let numeroCpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `)
        let selecionador = new Selecionador(this.clientes)
        let cliente = selecionador.selecionar(numeroCpf)

        let nomeProduto = this.entrada.receberTexto('Por favor, informe o nome do produto: ');
        let selecionadorNome = new SelecionadorProduto(this.produtos)
        let produto = selecionadorNome.selecionarProduto(nomeProduto)
        this.produtos.push(produto)
        
        // associa o pet ao cliente
        cliente.adicionarProduto(produto)
        console.log(`\nProduto consumido pelo cliente ${cliente.nome}\n`);
    }
}

