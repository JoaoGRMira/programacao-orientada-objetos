import { Telefone } from './Telefone';

function comparadorTelefone(o1: Telefone, o2: Telefone): number {
  let id1: string = o1.getDdd() + o1.getNumero();
  id1 = id1.trim().toLowerCase();

  let id2: string = o2.getDdd() + o2.getNumero();
  id2 = id2.trim().toLowerCase();

  if (id1 < id2) {
    return -1;
  } else if (id1 > id2) {
    return 1;
  } else {
    return 0;
  }
}

const telefones: Telefone[] = /* Obtenha a lista de telefones */;
telefones.sort(comparadorTelefone);