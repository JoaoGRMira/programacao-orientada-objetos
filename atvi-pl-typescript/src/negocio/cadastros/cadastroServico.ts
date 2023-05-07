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
        servico.nome = nomeServico;
        servico.valor = valorServico;

        this.servicos.push(servico)

        console.log(`\nCadastro concluído :)\n`);
    }
}