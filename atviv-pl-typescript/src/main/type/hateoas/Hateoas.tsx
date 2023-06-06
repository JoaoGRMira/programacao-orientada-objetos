export interface Hateoas<T> {
  adicionarLinkLista(lista: T[]): void;
  adicionarLink(objeto: T): void;
}