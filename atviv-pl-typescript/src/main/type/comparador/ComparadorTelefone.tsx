import { Telefone } from './Telefone';
import { Comparator } from './Comparator';

export class ComparadorTelefone implements Comparator<Telefone> {
  compare(o1: Telefone, o2: Telefone): number {
    const id1: string = o1.ddd + o1.numero;
    const id2: string = o2.ddd + o2.numero;

    const id1LowerCase: string = id1.trim().toLowerCase();
    const id2LowerCase: string = id2.trim().toLowerCase();

    if (id1LowerCase < id2LowerCase) {
      return -1;
    } else if (id1LowerCase > id2LowerCase) {
      return 1;
    } else {
      return 0;
    }
  }
}
