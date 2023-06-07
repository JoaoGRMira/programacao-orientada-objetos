import VerificadorStringNula from '../verificador/VerificadorStringNula';
import Endereco from '../modelo/Endereco';
import { Atualizador } from './Atualizador';

class AtualizadorEndereco implements Atualizador<Endereco> {
  private verificadorString: VerificadorStringNula;

  constructor(verificadorString: VerificadorStringNula) {
    this.verificadorString = verificadorString;
  }

  atualizar(alvo: Endereco, atualizacao: Endereco): void {
    if (!this.verificadorString.verificar(atualizacao.estado)) {
      alvo.estado = atualizacao.estado;
    }
    if (!this.verificadorString.verificar(atualizacao.cidade)) {
      alvo.cidade = atualizacao.cidade;
    }
    if (!this.verificadorString.verificar(atualizacao.bairro)) {
      alvo.bairro = atualizacao.bairro;
    }
    if (!this.verificadorString.verificar(atualizacao.rua)) {
      alvo.rua = atualizacao.rua;
    }
    if (!this.verificadorString.verificar(atualizacao.numero)) {
      alvo.numero = atualizacao.numero;
    }
    if (!this.verificadorString.verificar(atualizacao.codigoPostal)) {
      alvo.codigoPostal = atualizacao.codigoPostal;
    }
    if (!this.verificadorString.verificar(atualizacao.informacoesAdicionais)) {
      alvo.informacoesAdicionais = atualizacao.informacoesAdicionais;
    }
  }
}

export default AtualizadorEndereco;
