import { Component } from 'spring-framework';
import { Verificador } from './Verificador';
import { Telefone } from '../modelo/Telefone';
import { VerificadorStringNula } from './VerificadorStringNula';

@Component
export class VerificadorTelefoneNulo implements Verificador<Telefone> {
  private verificadorString: VerificadorStringNula;

  constructor(verificadorString: VerificadorStringNula) {
    this.verificadorString = verificadorString;
  }

  verificar(objeto: Telefone): boolean {
    if (objeto !== null) {
      const ddd: boolean = this.verificadorString.verificar(objeto.getDdd());
      const numero: boolean = this.verificadorString.verificar(objeto.getNumero());
      return ddd || numero;
    } else {
      return true;
    }
  }
}
