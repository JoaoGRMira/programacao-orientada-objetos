import { Request, Response } from 'express';
import Cliente from '../modelo/Cliente';
import RepositorioCliente from '../repositorio/RepositorioCliente';
import HateoasCliente from '../hateoas/HateoasCliente';
import AtualizadorCliente from '../atualizador/AtualizadorCliente';

class ControleCliente {
  private repositorio: RepositorioCliente;
  private hateoas: HateoasCliente;
  private atualizador: AtualizadorCliente;

  constructor() {
    this.repositorio = new RepositorioCliente();
    this.hateoas = new HateoasCliente();
    this.atualizador = new AtualizadorCliente();
  }

  public obterCliente(req: Request, res: Response): void {
    const id: number = parseInt(req.params.id);
    const cliente: Cliente | undefined = this.repositorio.obterPorId(id);
    if (cliente) {
      this.hateoas.adicionarLink(cliente);
      res.status(200).json(cliente);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  }

  public obterClientes(req: Request, res: Response): void {
    const clientes: Cliente[] = this.repositorio.obterTodos();
    this.hateoas.adicionarLink(clientes);
    res.status(200).json(clientes);
  }

  public atualizarCliente(req: Request, res: Response): void {
    const atualizacao: Cliente = req.body;
    const cliente: Cliente | undefined = this.repositorio.obterPorId(atualizacao.id);
    if (cliente) {
      this.atualizador.atualizar(cliente, atualizacao);
      // this.repositorio.salvar(cliente); // Implementar essa função no RepositorioCliente
      res.status(200).send('Cliente atualizado com sucesso');
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  }

  public cadastrarCliente(req: Request, res: Response): void {
    const novoCliente: Cliente = req.body;
    this.repositorio.salvar(novoCliente);
    res.status(200).send('Cliente cadastrado com sucesso');
  }

  public excluirCliente(req: Request, res: Response): void {
    const exclusao: Cliente = req.body;
    const cliente: Cliente | undefined = this.repositorio.obterPorId(exclusao.id);
    if (cliente) {
      this.repositorio.excluir(cliente);
      res.status(200).send('Cliente excluído com sucesso');
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  }
}

export default ControleCliente;
