import { RepresentationModel } from "spring-hateoas";

export class Cliente extends RepresentationModel<Cliente> {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
    endereco: Endereco;
    telefones: Telefone[];

    constructor(
        id: number,
        nome: string,
        nomeSocial: string,
        email: string,
        endereco: Endereco,
        telefones: Telefone[]
    ) {
        super();
        this.id = id;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.email = email;
        this.endereco = endereco;
        this.telefones = telefones;
    }
}

export class Endereco {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;

    constructor(
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: string,
        codigoPostal: string,
        informacoesAdicionais: string
    ) {
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numero = numero
        this.codigoPostal = codigoPostal
        this.informacoesAdicionais = informacoesAdicionais
    }
}

export class Telefone {
    tipo: string;
    numero: string;

    constructor(
        tipo: string,
        numero: string
    ) {
        this.tipo = tipo
        this.numero = numero
    }
}
