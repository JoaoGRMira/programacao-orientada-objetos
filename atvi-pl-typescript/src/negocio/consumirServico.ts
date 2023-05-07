import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente/cliente"
import Servico from "../modelo/servico"
import Cadastro from "./cadastros/cadastro"
import Selecionador from "./selecionadores/selecionador"
import SelecionadorServico from "./selecionadores/selecionadorServico"

export default class ConsumirServico extends Cadastro {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício da requisição de serviço`);
        let numeroCpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `)
        let selecionador = new Selecionador(this.clientes)
        let cliente = selecionador.selecionar(numeroCpf)

        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do servico: ');
        let selecionadorNome = new SelecionadorServico(this.servicos)
        let servico = selecionadorNome.selecionarServico(nomeServico)
        
        cliente.adicionarServico(servico)
        console.log(`\nServico consumido pelo cliente ${cliente.nome}\n`);
    }
}

