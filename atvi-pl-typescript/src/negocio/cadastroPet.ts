import Entrada from "../io/entrada"
import cliente from "../modelo/cliente"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Empresa from "../modelo/empresa"
import Pet from "../modelo/pet"
import Cadastro from "./cadastro"
import Selecionador from "./selecionador"

export default class CadastroPet extends Cadastro {
    private empresa: Empresa
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
        this.empresa = new Empresa()
    }


    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let cpfTutor = this.entrada.receberTexto('Digite o CPF do tutor: ')
        let selecionadorTutor = new Selecionador(this.empresa.getClientes)
        let tutor = selecionadorTutor.selecionar(cpfTutor)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do pet: `);
        let pet = new Pet(nome, tipo, raca, genero);
        this.pets.push(pet)
        
        console.log(`\nCadastro concluído :)\n`);
    }
}