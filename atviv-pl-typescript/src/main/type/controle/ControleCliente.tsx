import { Request, Response } from 'express';
import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { RepositorioCliente } from './RepositorioCliente';
import { Cliente } from './Cliente';
import { AtualizadorCliente } from './AtualizadorCliente';
import { HateoasCliente } from './HateoasCliente';

@Controller('cliente')
export class ControleCliente {
  constructor(
    private repositorio: RepositorioCliente,
    private hateoas: HateoasCliente,
    private atualizador: AtualizadorCliente
  ) {}

  @Get(':id')
  public obterCliente(@Param('id') id: string, @Response() res: Response): void {
    const cliente: Cliente | undefined = this.repositorio.findById(parseInt(id, 10));
    if (cliente !== undefined) {
      this.hateoas.adicionarLink(cliente);
      res.status(HttpStatus.FOUND).json(cliente);
    } else {
      res.sendStatus(HttpStatus.NOT_FOUND);
    }
  }

  @Get('clientes')
  public obterClientes(@Response() res: Response): void {
    const clientes: Cliente[] = this.repositorio.findAll();
    this.hateoas.adicionarLink(clientes);
    res.status(HttpStatus.FOUND).json(clientes);
  }

  @Put('atualizar')
  public atualizarCliente(@Body() atualizacao: Cliente, @Response() res: Response): void {
    let status: HttpStatus = HttpStatus.BAD_REQUEST;
    const cliente: Cliente | undefined = this.repositorio.getById(atualizacao.id);
    if (cliente !== undefined) {
      this.atualizador.atualizar(cliente, atualizacao);
      this.repositorio.save(cliente);
      status = HttpStatus.OK;
    }
    res.sendStatus(status);
  }

  @Post('cadastrar')
  public cadastrarCliente(@Body() novo: Cliente, @Response() res: Response): void {
    let status: HttpStatus = HttpStatus.BAD_REQUEST;
    if (novo !== null) {
      this.repositorio.save(novo);
      status = HttpStatus.OK;
    }
    res.sendStatus(status);
  }

  @Delete('excluir')
  public excluirCliente(@Body() exclusao: Cliente, @Response() res: Response): void {
    const cliente: Cliente | undefined = this.repositorio.getById(exclusao.id);
    if (cliente === undefined) {
      res.sendStatus(HttpStatus.BAD_REQUEST);
    } else {
      this.repositorio.delete(cliente);
      res.sendStatus(HttpStatus.OK);
    }
  }
}
