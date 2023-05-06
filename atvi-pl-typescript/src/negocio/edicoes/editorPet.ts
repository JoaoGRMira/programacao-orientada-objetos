import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"

export default class EditorPet {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(pet: Pet): void {
        console.log(`\nInício da edição do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        pet.nome = nome
        console.log(`\Edição concluída :)\n`);
    }
}