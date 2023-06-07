import { Verificador } from './Verificador';

export class VerificadorStringNula implements Verificador<string> {
  verificar(objeto: string): boolean {
    let nulo = true;
    if (!(objeto === null)) {
      nulo = objeto.trim().length === 0;
    }
    return nulo;
  }
}
