import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    public nome: string
    private tipo: string
    private raca: string
    private genero: string
    private tutor: string
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, raca: string, genero: string, tipo: string, tutor: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.tutor = tutor
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getTutor(){return this.tutor}

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public adicionarProduto(produtoConsumido: Produto): void {
        this.produtosConsumidos.push(produtoConsumido);
    }
    public adicionarServico(servicoConsumido: Servico): void {
        this.servicosConsumidos.push(servicoConsumido);
    }
}