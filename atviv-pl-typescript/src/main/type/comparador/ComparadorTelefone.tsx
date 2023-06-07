import { Comparator } from './Comparator';
import Telefone from '../modelo/Telefone';

class ComparadorTelefone implements Comparator<Telefone> {
  compare(o1: Telefone, o2: Telefone): number {
    const id1 = `${o1.ddd}${o1.numero}`.trim().toLowerCase();
    const id2 = `${o2.ddd}${o2.numero}`.trim().toLowerCase();

    return id1.localeCompare(id2);
  }
}

export default ComparadorTelefone;