import { RepresentationModel } from 'spring-hateoas';

export class Telefone extends RepresentationModel<Telefone> {
  private id: number;
  private numero: string;
  private ddd: string;

  constructor(id: number, numero: string, ddd: string) {
    super();
    this.id = id;
    this.numero = numero;
    this.ddd = ddd;
  }

  // Getters and Setters
  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getNumero(): string {
    return this.numero;
  }

  public setNumero(numero: string): void {
    this.numero = numero;
  }

  public getDdd(): string {
    return this.ddd;
  }

  public setDdd(ddd: string): void {
    this.ddd = ddd;
  }
}
