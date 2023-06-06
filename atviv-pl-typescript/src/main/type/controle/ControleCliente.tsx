import { Request, Response } from 'express';
import { HttpStatus } from 'http-status-codes';
import { Cliente } from '../modelo/Cliente';
import { RepositorioCliente } from '../repositorio/RepositorioCliente';
import { HateoasCliente } from '../hateoas/HateoasCliente';
import { AtualizadorCliente } from '../atualizador/AtualizadorCliente';

export class ControleCliente {
  constructor(
    private repositorio: RepositorioCliente,
    private hateoas: HateoasCliente,
    private atualizador: AtualizadorCliente
  ) {}

  public obterCliente(req: Request, res: Response): Response {
    const id: number = parseInt(req.params.id);
    const cliente: Cliente = this.repositorio.findById(id);
    if (cliente !== null) {
      this.hateoas.adicionarLinkLista(cliente);
      return res.status(HttpStatus.FOUND).json(cliente);
    } else {
      return res.sendStatus(HttpStatus.NOT_FOUND);
    }
  }

  public obterClientes(req: Request, res: Response): Response {
    const clientes: Cliente[] = this.repositorio.findAll();
    this.hateoas.adicionarLink(clientes);
    return res.status(HttpStatus.FOUND).json(clientes);
  }

  public atualizarCliente(req: Request, res: Response): Response {
    const atualizacao: Cliente = req.body;
    const cliente: Cliente = this.repositorio.getById(atualizacao.getId());
    if (cliente !== null) {
      this.atualizador.atualizar(cliente, atualizacao);
      this.repositorio.save(cliente);
      return res.sendStatus(HttpStatus.OK);
    } else {
      return res.sendStatus(HttpStatus.BAD_REQUEST);
    }
  }

  public cadastrarCliente(req: Request, res: Response): Response {
    const novo: Cliente = req.body;
    if (novo !== null) {
      this.repositorio.save(novo);
      return res.sendStatus(HttpStatus.OK);
    } else {
      return res.sendStatus(HttpStatus.BAD_REQUEST);
    }
  }

  public excluirCliente(req: Request, res: Response): Response {
    const exclusao: Cliente = req.body;
    const cliente: Cliente = this.repositorio.getById(exclusao.getId());
    if (cliente === null) {
      return res.sendStatus(HttpStatus.BAD_REQUEST);
    } else {
      this.repositorio.delete(cliente);
      return res.sendStatus(HttpStatus.OK);
    }
  }
}
