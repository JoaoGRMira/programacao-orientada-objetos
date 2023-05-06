export default class Pet {
    public nome: string
    private tipo: string
    private raca: string
    private genero: string
    private tutor: string

    constructor(nome: string, raca: string, genero: string, tipo: string, tutor: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.tutor = tutor
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
    public get getTutor(){return this.tutor}
}