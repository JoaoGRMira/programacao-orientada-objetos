import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        
        this.produtos.forEach( produto => {
            console.log(`Nome do produto: ${produto.nomeProduto}`)
            console.log(`Valor do produto: ${produto.valorProduto}`)
        })
        
        //for (let i = 0; i < this.produtos.length; i++) {
        //    let produto = this.produtos[i]
        //    console.log(`Nome do produto: ${produto.nome}`)
        //}

        console.log(`\n`);
    }
}