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
    }
    public gerarProntos(): void {
        let produtos = [
            "Ração para cães",
            "Ração para gatos",
            "Brinquedo interativo",
            "Arranhador para gatos",
            "Coleira antipulgas e carrapatos",
            "Caixa de areia",
            "Comedouro",
            "Bebedouro",
            "Guia retrátil",
            "Caminha acolchoada",
            "Caixa de transporte",
            "Brinquedo recheável com petiscos",
            "Escova de pelo",
            "Shampoo hipoalergênico",
            "Coleira de identificação personalizada",
        ]
        let valor = [
            120.00,
            60.00,
            40.00,
            80.00,
            30.00,
            100.00,
            150.00,
            70.00,
            50.00,
            100.00,
            120.00,
            25.00,
            35.00,
            40.00,
            20.00,
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosValor = valor.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosValor[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}