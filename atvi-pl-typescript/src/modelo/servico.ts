export default class Servico {
    public nome: string;
    public valor: number;
    nomeServico: any;
    valorServico: any;
    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
    }
    public get getNome(): string {
        return this.nome
    }
    public get getValor(): number {
        return this.valor
    }
}