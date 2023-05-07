import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"

export default class EditorServico {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(servico: Servico): void {
        console.log(`\nInício da edição do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        servico.nome = nome
        console.log(`\Edição concluída :)\n`);
    }
}