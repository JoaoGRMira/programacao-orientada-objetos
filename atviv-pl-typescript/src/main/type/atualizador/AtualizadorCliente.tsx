import VerificadorStringNula from './VerificadorStringNula';
import VerificadorEnderecoNulo from './VerificadorEnderecoNulo';
import AtualizadorEndereco from './AtualizadorEndereco';
import VerificadorTelefoneNulo from './VerificadorTelefoneNulo';
import Cliente from './Cliente';
import { Atualizador } from './Atualizador';
import { Telefone } from '../modelo/Telefone';

class AtualizadorCliente implements Atualizador<Cliente> {
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
      this.atualizadorEndereco.atualizar(alvo.endereco, atualizacao.endereco);
    }
    if (atualizacao.telefones.length > 0) {
      alvo.telefones = [];
      for (const telefone of atualizacao.telefones) {
        if (!this.verificadorTelefone.verificar(telefone)) {
          const telefoneNovo: Telefone = { ...telefone };
          alvo.telefones.push(telefoneNovo);
        }
      }
    }
  }
}

export default AtualizadorCliente;