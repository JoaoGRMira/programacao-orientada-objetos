import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"

export default class EditorProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(produto: Produto): void {
        console.log(`\nInício da edição do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        produto.nomeProduto = nome
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        produto.valorProduto = valor
        console.log(`\Edição concluída :)\n`);
    }
}