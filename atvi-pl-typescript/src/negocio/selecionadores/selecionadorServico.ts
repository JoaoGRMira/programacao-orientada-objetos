import Servico from "../../modelo/servico";

export default class SelecionadorServico {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        this.servicos = servicos
    }
    public selecionarServico(nomeServico: string) {
        let servicoAlvo = new Servico('')

        this.servicos.forEach(servico => {
            if (nomeServico === servico.getNome) {
                servicoAlvo = servico
            }
        })
        return servicoAlvo
    }
}