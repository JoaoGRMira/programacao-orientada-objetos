interface Hateoas<T> {
  adicionarLink(lista: T[]): void;
  adicionarLink(objeto: T): void;
}

export default Hateoas;