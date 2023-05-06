import Pet from "../../modelo/pet";

export default class Selecionadorpet {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>){
        this.pets = pets
    }
    public selecionarPet(nomePet: string) {
        let petAlvo = new Pet('','','','','')

        this.pets.forEach(pet => {
            if (nomePet === pet.getNome) {
                petAlvo = pet
            }
        })
        return petAlvo
    }
}