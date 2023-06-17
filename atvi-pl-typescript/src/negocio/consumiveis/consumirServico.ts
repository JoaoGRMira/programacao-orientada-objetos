import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente/cliente"
import Pet from "../../modelo/pet"
import Servico from "../../modelo/servico"
import Selecionador from "../selecionadores/selecionador"
import Selecionadorpet from "../selecionadores/selecionadorPet"
import SelecionadorServico from "../selecionadores/selecionadorServico"
import Consumivel from "./consumir"

export default class ConsumirServico extends Consumivel {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(servicos: Array<Servico>, clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.pets = pets
        this.entrada = new Entrada()
    }

    public consumir(): void {
        console.log(`\nInício da requisição de serviço`);
        let numeroCpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `)
        let selecionador = new Selecionador(this.clientes)
        let cliente = selecionador.selecionar(numeroCpf)

        let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let selecionadorPet = new Selecionadorpet(this.pets)
        let pet = selecionadorPet.selecionarPet(nomePet)

        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do servico: ');
        let selecionadorNome = new SelecionadorServico(this.servicos)
        let servico = selecionadorNome.selecionarServico(nomeServico)
        
        cliente.adicionarServico(servico)
        pet.adicionarServico(servico)
        console.log(`\nServico consumido pelo cliente ${cliente.nome}\n`);
    }
}

