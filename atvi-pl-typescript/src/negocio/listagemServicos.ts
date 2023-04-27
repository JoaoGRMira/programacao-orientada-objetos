import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        
        this.servicos.forEach( servico => {
            console.log(`Nome do serviço: ${servico.nome}`)
        })
        
        //for (let i = 0; i < this.servicos.length; i++) {
        //    let Servico = this.servicos[i]
        //    console.log(`Nome do Servico: ${Servico.nome}`)
        //}

        console.log(`\n`);
    }
}