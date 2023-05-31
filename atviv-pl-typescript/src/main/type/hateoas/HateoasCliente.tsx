import { Link } from 'spring-hateoas';
import { Hateoas } from './Hateoas';
import { ControleCliente } from './ControleCliente';
import { Cliente } from './Cliente';

export class HateoasCliente implements Hateoas<Cliente> {
  adicionarLink(lista: Cliente[]): void {
    for (const cliente of lista) {
      const id: number = cliente.id;
      const linkProprio: Link = Link.to(ControleCliente).obterCliente(id).withSelfRel();
      cliente.add(linkProprio);
    }
  }

  adicionarLink(objeto: Cliente): void {
    const linkProprio: Link = Link.to(ControleCliente).obterClientes().withRel('clientes');
    objeto.add(linkProprio);
  }
}
