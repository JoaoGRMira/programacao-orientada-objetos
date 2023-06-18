export interface Atualizador<T> {
  atualizar(alvo: T, atualizacao: T): void;
}