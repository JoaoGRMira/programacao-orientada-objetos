import Cliente from "../../modelo/cliente/cliente";
import Listagem from "./listagem";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";

export default class ListagemConsPet extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(`\nProdutos e Serviços mais consumidos por raça e tipo de pet:`);
  
    const produtosServicosMap: Map<string, number> = new Map();
  
    this.clientes.forEach((cliente) => {
      cliente.getPets.forEach((pet: Pet) => {
        const racaTipo = `Raça: ${pet.getRaca} \n Tipo: ${pet.getTipo}`;
  
        pet.getProdutosConsumidos.forEach((produto: Produto) => {
          const quantidadeAtual = produtosServicosMap.get(`${racaTipo} \n- Produto: ${produto.getNome}`) || 0;
          produtosServicosMap.set(`${racaTipo} \n- Produto: ${produto.getNome}`, quantidadeAtual + 1);
        });
  
        pet.getServicosConsumidos.forEach((servico) => {
          const quantidadeAtual = produtosServicosMap.get(`${racaTipo} \n- Serviço: ${servico.getNome}`) || 0;
          produtosServicosMap.set(`${racaTipo} \n- Serviço: ${servico.getNome}`, quantidadeAtual + 1);
        });
      });
    });
  
    const produtosServicosOrdenados = Array.from(produtosServicosMap.entries()).sort((a, b) => b[1] - a[1]);
  
    produtosServicosOrdenados.forEach(([nome, quantidade]) => {
      console.log(`\n${nome} - Quantidade: ${quantidade}`);
    });
  }  
}
