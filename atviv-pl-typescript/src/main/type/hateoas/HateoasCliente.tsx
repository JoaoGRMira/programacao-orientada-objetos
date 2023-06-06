import { Component } from 'typescript-starter';
import { List } from 'java.util';
import { Link } from 'org.springframework.hateoas';
import { WebMvcLinkBuilder } from 'org.springframework.hateoas.server.mvc';
import { ControleCliente } from '../controle/ControleCliente';
import { Cliente } from '../modelo/Cliente';
import { Hateoas } from './Hateoas';

@Component
export class HateoasCliente implements Hateoas<Cliente> {
adicionarLinkLista(lista: List<Cliente>): void {
for (const cliente of lista) {
const id: number = cliente.getId();
const linkProprio: Link = WebMvcLinkBuilder
.linkTo(WebMvcLinkBuilder.methodOn(ControleCliente).obterCliente(id))
.withSelfRel();
cliente.add(linkProprio);
}
}

adicionarLink(objeto: Cliente): void {
const linkProprio: Link = WebMvcLinkBuilder
.linkTo(WebMvcLinkBuilder.methodOn(ControleCliente).obterClientes())
.withRel('clientes');
objeto.add(linkProprio);
}
}