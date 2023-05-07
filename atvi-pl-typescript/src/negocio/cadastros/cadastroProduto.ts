import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let nomeProduto = this.entrada.receberTexto('Por favor, informe o nome do produto: ');
        let valorProduto = this.entrada.receberNumero('Por favor, informe o valor do produto: ');
        let produto = new Produto(nomeProduto, valorProduto);
        produto.nome = nomeProduto;
        produto.valor = valorProduto;

        this.produtos.push(produto)

        console.log(`\nCadastro concluído :)\n`);
    }
}