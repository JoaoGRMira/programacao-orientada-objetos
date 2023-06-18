import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente/cliente"

export default class EditorCliente {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(cliente: Cliente): void {
        console.log(`\nInício da edição do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
        cliente.nome = nome
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `)
        cliente.nomeSocial = nomeSocial
        console.log(`\Edição concluída :)\n`);
    }
}