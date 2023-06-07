import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Cliente } from '../modelo/Cliente';

interface Hateoas<T> {
  adicionarLink(lista: T[]): void;
  adicionarLink(objeto: T): void;
}

class HateoasCliente implements Hateoas<Cliente> {
  public adicionarLink(lista: Cliente[]): void {
    lista.forEach((cliente) => {
      const id = cliente.id;
      const linkProprio = (
        <Link to={`/cliente/${id}`} rel="self" key={id}>
          {cliente.nome}
        </Link>
      );
      cliente.links = cliente.links ? [...cliente.links, linkProprio] : [linkProprio];
    });
  }

  public adicionarLink(objeto: Cliente): void {
    const linkProprio = (
      <Link to="/cliente/clientes" rel="clientes" key="clientes">
        Ver todos os clientes
      </Link>
    );
    objeto.links = objeto.links ? [...objeto.links, linkProprio] : [linkProprio];
  }
}

export default HateoasCliente;