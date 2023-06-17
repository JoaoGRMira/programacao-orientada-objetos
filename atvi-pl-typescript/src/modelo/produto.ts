export default class Produto {
    public nomeProduto: string;
    public valorProduto: number;
    constructor(nome: string, valor: number){
        this.nomeProduto = nome
        this.valorProduto = valor
    }
    public get getNome(): string {
        return this.nomeProduto
    }
    public get getValor(): number {
        return this.valorProduto
    }
}