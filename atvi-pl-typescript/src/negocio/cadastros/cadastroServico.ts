import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Serviço`);
        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do serviço: ');
        let valorServico = this.entrada.receberNumero('Por favor, informe o valor do serviço: ');
        let servico = new Servico(nomeServico, valorServico);
        servico.nomeServico = nomeServico;
        servico.valorServico = valorServico;

        this.servicos.push(servico)
    }
    public gerarProntos(): void {
        let servicos = [
            "Banho e tosa para cães de porte pequeno",
            "Banho e tosa para cães de porte médio",
            "Banho e tosa para cães de porte grande",
            "Hospedagem para cães",
            "Hospedagem para gatos",
            "Passeio individual com cães",
            "Adestramento básico para cães",
            "Consulta veterinária",
            "Pet sitter",
            "Pet taxi"
        ]
        let valor = [
            50.00,
            70.0,
            90.00,
            60.00,
            40.00,
            30.00,
            200.00,
            100.00,
            50.00,
            40.00
        ]
        let sliceServico = servicos.slice();
        let sliceServicoValor = valor.slice()
        for (let index = 0; index < sliceServico.length; index++) {
            let adicionarServico = new Servico(sliceServico[index], Number(sliceServicoValor[index]))
            this.servicos.push(adicionarServico)
        }
    }
}