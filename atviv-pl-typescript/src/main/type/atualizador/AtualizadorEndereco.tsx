import { VerificadorStringNula } from './VerificadorStringNula';
import { Endereco } from './Endereco';
import { Atualizador } from './Atualizador';

export class AtualizadorEndereco implements Atualizador<Endereco> {
  private verificadorString: VerificadorStringNula;

  constructor(verificadorString: VerificadorStringNula) {
    this.verificadorString = verificadorString;
  }

  public atualizar(alvo: Endereco, atualizacao: Endereco): void {
    if (!this.verificadorString.verificar(atualizacao.getEstado())) {
      alvo.setEstado(atualizacao.getEstado());
    }
    if (!this.verificadorString.verificar(atualizacao.getCidade())) {
      alvo.setCidade(atualizacao.getCidade());
    }
    if (!this.verificadorString.verificar(atualizacao.getBairro())) {
      alvo.setBairro(atualizacao.getBairro());
    }
    if (!this.verificadorString.verificar(atualizacao.getRua())) {
      alvo.setRua(atualizacao.getRua());
    }
    if (!this.verificadorString.verificar(atualizacao.getNumero())) {
      alvo.setNumero(atualizacao.getNumero());
    }
    if (!this.verificadorString.verificar(atualizacao.getCodigoPostal())) {
      alvo.setCodigoPostal(atualizacao.getCodigoPostal());
    }
    if (!this.verificadorString.verificar(atualizacao.getInformacoesAdicionais())) {
      alvo.setInformacoesAdicionais(atualizacao.getInformacoesAdicionais());
    }
  }
}
