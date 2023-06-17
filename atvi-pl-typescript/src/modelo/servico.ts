export default class Servico {
    public nomeServico: string;
    public valorServico: number;
    constructor(nome: string, valor: number){
        this.nomeServico = nome
        this.valorServico = valor
    }
    public get getNome(): string {
        return this.nomeServico
    }
    public get getValor(): number {
        return this.valorServico
    }
}