import { Verificador } from './Verificador';
import { Endereco } from '../modelo/Endereco';

export class VerificadorEnderecoNulo implements Verificador<Endereco> {
  verificar(objeto: Endereco): boolean {
    if (objeto !== null) {
      return false;
    } else {
      return true;
    }
  }
}
