import Cliente from "../../modelo/cliente/cliente";
import Listagem from "./listagem";

export default class ListagemConsProdServ extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(`\nProdutos e Serviços por ordem de mais consumidos:`);
  
    const produtosServicosMap: Map<string, number> = new Map();
  
    this.clientes.forEach((cliente) => {
      cliente.getProdutosConsumidos.forEach((produto) => {
        const quantidadeAtual = produtosServicosMap.get(produto.getNome) || 0;
        produtosServicosMap.set(produto.getNome, quantidadeAtual + 1);
      });
  
      cliente.getServicosConsumidos.forEach((servico) => {
        const quantidadeAtual = produtosServicosMap.get(servico.getNome) || 0;
        produtosServicosMap.set(servico.getNome, quantidadeAtual + 1);
      });
    });
  
    const produtosServicosOrdenados = Array.from(produtosServicosMap.entries()).sort((a, b) => b[1] - a[1]);
  
    produtosServicosOrdenados.forEach(([nome, quantidade]) => {
      console.log(`\n${nome} - Quantidade: ${quantidade}`);
    });
  }  
}