import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente/cliente"
import Pet from "../../modelo/pet"
import Produto from "../../modelo/produto"
import Selecionador from "../selecionadores/selecionador"
import Selecionadorpet from "../selecionadores/selecionadorPet"
import SelecionadorProduto from "../selecionadores/selecionadorProduto"
import Consumivel from "./consumir"

export default class ConsumirProduto extends Consumivel{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.pets = pets
        this.entrada = new Entrada()
    }

    public consumir(): void {
        console.log(`\nInício da requisição de produto`);
        let numeroCpf = this.entrada.receberTexto(`Por favor, informe o CPF do cliente: `)
        let selecionador = new Selecionador(this.clientes)
        let cliente = selecionador.selecionar(numeroCpf)

        let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let selecionadorPet = new Selecionadorpet(this.pets)
        let pet = selecionadorPet.selecionarPet(nomePet)

        let nomeProduto = this.entrada.receberTexto('Por favor, informe o nome do produto: ');
        let selecionadorNome = new SelecionadorProduto(this.produtos)
        let produto = selecionadorNome.selecionarProduto(nomeProduto)
        
        cliente.adicionarProduto(produto)
        pet.adicionarProduto(produto)
        console.log(`\nProduto consumido pelo cliente ${cliente.nome}\n`);
    }
}

