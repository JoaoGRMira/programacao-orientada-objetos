import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
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
    
    private selecionarCliente(): Cliente {
        let cpf = this.entrada.receberTexto('Digite o CPF do cliente: ')
        let selecionadorCliente = new Selecionador(this.empresa.getClientes)
        let cliente = selecionadorCliente.selecionar(cpf)
        return cliente;
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do pet: `);
        
        let cliente = this.selecionarCliente();

        if (cliente) {
            let pet = new Pet(nome, tipo, raca, genero);
            cliente.adicionarPet(pet);
            console.log(`\nPet cadastrado e associado ao cliente ${cliente.nome}.\n`);
        } else {
            console.log(`\nCliente não encontrado. O pet não foi cadastrado.\n`);
        }
    }
}

