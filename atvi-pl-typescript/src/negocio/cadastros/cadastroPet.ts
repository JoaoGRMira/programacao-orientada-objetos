import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente/cliente"
import Pet from "../../modelo/pet"
import Cadastro from "./cadastro"
import Selecionador from "../selecionadores/selecionador"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let numeroCpf = this.entrada.receberTexto(`Por favor informe o CPF do tutor: `)
        let selecionador = new Selecionador(this.clientes)
        let cliente = selecionador.selecionar(numeroCpf)

        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do pet: `);
        let tutor = cliente.nome
        let pet = new Pet(nome, raca, genero, tipo, tutor);
        this.pets.push(pet)
        
        cliente.adicionaPet(pet)
        console.log(`\nPet cadastrado pelo cliente ${cliente.nome}\n`);
    }
}

