import { VerificadorStringNula } from './verificadores/VerificadorStringNula';
import { VerificadorEnderecoNulo } from './verificadores/VerificadorEnderecoNulo';
import { AtualizadorEndereco } from './atualizadores/AtualizadorEndereco';
import { VerificadorTelefoneNulo } from './verificadores/VerificadorTelefoneNulo';
import { Cliente } from './modelo/Cliente';
import { Telefone } from './modelo/Telefone';
import { Atualizador } from './Atualizador';

export class AtualizadorCliente implements Atualizador<Cliente> {
  private verificadorString: VerificadorStringNula;
  private verificadorEndereco: VerificadorEnderecoNulo;
  private atualizadorEndereco: AtualizadorEndereco;
  private verificadorTelefone: VerificadorTelefoneNulo;

  constructor(
    verificadorString: VerificadorStringNula,
    verificadorEndereco: VerificadorEnderecoNulo,
    atualizadorEndereco: AtualizadorEndereco,
    verificadorTelefone: VerificadorTelefoneNulo
  ) {
    this.verificadorString = verificadorString;
    this.verificadorEndereco = verificadorEndereco;
    this.atualizadorEndereco = atualizadorEndereco;
    this.verificadorTelefone = verificadorTelefone;
  }

  atualizar(alvo: Cliente, atualizacao: Cliente): void {
    if (!this.verificadorString.verificar(atualizacao.nome)) {
      alvo.nome = atualizacao.nome;
    }
    if (!this.verificadorString.verificar(atualizacao.email)) {
      alvo.email = atualizacao.email;
    }
    if (!this.verificadorString.verificar(atualizacao.nomeSocial)) {
      alvo.nomeSocial = atualizacao.nomeSocial;
    }
    if (!this.verificadorEndereco.verificar(atualizacao.endereco)) {
      if (alvo.endereco !== null) {
        this.atualizadorEndereco.atualizar(alvo.endereco, atualizacao.endereco);
      } else {
        alvo.endereco = atualizacao.endereco;
      }
    }
    if (atualizacao.telefones.length > 0) {
      alvo.telefones = [];
      for (const telefone of atualizacao.telefones) {
        if (!this.verificadorTelefone.verificar(telefone)) {
          const telefoneNovo: Telefone = new Telefone();
          telefoneNovo.ddd = telefone.ddd;
          telefoneNovo.numero = telefone.numero;
          alvo.telefones.push(telefoneNovo);
        }
      }
    }
  }
}
