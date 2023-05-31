import { VerificadorStringNula } from './VerificadorStringNula';
import { VerificadorEnderecoNulo } from './VerificadorEnderecoNulo';
import { AtualizadorEndereco } from './AtualizadorEndereco';
import { VerificadorTelefoneNulo } from './VerificadorTelefoneNulo';
import { Cliente } from './Cliente';
import { Telefone } from './Telefone';
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

  public atualizar(alvo: Cliente, atualizacao: Cliente): void {
    if (!this.verificadorString.verificar(atualizacao.getNome())) {
      alvo.setNome(atualizacao.getNome());
    }
    if (!this.verificadorString.verificar(atualizacao.getEmail())) {
      alvo.setEmail(atualizacao.getEmail());
    }
    if (!this.verificadorString.verificar(atualizacao.getNomeSocial())) {
      alvo.setNomeSocial(atualizacao.getNomeSocial());
    }
    if (!this.verificadorEndereco.verificar(atualizacao.getEndereco())) {
      if (alvo.getEndereco() !== null) {
        this.atualizadorEndereco.atualizar(alvo.getEndereco(), atualizacao.getEndereco());
      } else {
        alvo.setEndereco(atualizacao.getEndereco());
      }
    }
    if (atualizacao.getTelefones().length > 0) {
      alvo.getTelefones().length = 0;
      for (const telefone of atualizacao.getTelefones()) {
        if (!this.verificadorTelefone.verificar(telefone)) {
          const telefoneNovo: Telefone = new Telefone();
          telefoneNovo.setDdd(telefone.getDdd());
          telefoneNovo.setNumero(telefone.getNumero());
          alvo.getTelefones().push(telefoneNovo);
        }
      }
    }
  }
}
