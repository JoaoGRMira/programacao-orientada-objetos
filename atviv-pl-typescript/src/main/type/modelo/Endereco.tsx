import { RepresentationModel } from "spring-hateoas";

export class Endereco extends RepresentationModel<Endereco> {
    id: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;

    constructor(
        id: number,
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: string,
        codigoPostal: string,
        informacoesAdicionais: string
    ) {
        super();

        this.id = id;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.informacoesAdicionais = informacoesAdicionais;
    }
}
