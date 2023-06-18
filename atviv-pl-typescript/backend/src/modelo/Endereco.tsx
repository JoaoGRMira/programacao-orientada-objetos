import { RepresentationModel } from 'spring-hateoas';

export class Endereco extends RepresentationModel<Endereco> {
  private id: number;
  private estado: string;
  private cidade: string;
  private bairro: string;
  private rua: string;
  private numero: string;
  private codigoPostal: string;
  private informacoesAdicionais: string;

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

  // Getters and Setters
  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getEstado(): string {
    return this.estado;
  }

  public setEstado(estado: string): void {
    this.estado = estado;
  }

  public getCidade(): string {
    return this.cidade;
  }

  public setCidade(cidade: string): void {
    this.cidade = cidade;
  }

  public getBairro(): string {
    return this.bairro;
  }

  public setBairro(bairro: string): void {
    this.bairro = bairro;
  }

  public getRua(): string {
    return this.rua;
  }

  public setRua(rua: string): void {
    this.rua = rua;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public getCodigoPostal(): string {
    return this.codigoPostal;
  }

  public setCodigoPostal(codigoPostal: string): void {
    this.codigoPostal = codigoPostal;
  }

  public getInformacoesAdicionais(): string {
    return this.informacoesAdicionais;
  }

  public setInformacoesAdicionais(informacoesAdicionais: string): void {
    this.informacoesAdicionais = informacoesAdicionais;
  }
}
