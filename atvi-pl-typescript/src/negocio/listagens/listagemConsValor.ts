import Cliente from "../../modelo/cliente/cliente";
import Listagem from "./listagem";

export default class ListagemConsValor extends Listagem {
    private clientes: Array<Cliente>;
  
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }
  
    public listar(): void {
        console.log(`\nTop 5 clientes que mais consumiram produtos e serviços em valor:`);
      
        const clientesValoresMap: Map<Cliente, number> = new Map();
      
        this.clientes.forEach((cliente) => {
            let valorTotal = 0;
      
            cliente.getProdutosConsumidos.forEach((produto) => {
                valorTotal += produto.getValor;
            });
      
            cliente.getServicosConsumidos.forEach((servico) => {
                valorTotal += servico.getValor;
            });
      
            clientesValoresMap.set(cliente, valorTotal);
        });
      
        const clientesOrdenados = Array.from(clientesValoresMap.entries()).sort((a, b) => b[1] - a[1]);
      
        const top5Clientes = clientesOrdenados.slice(0, 5);
      
        top5Clientes.forEach(([cliente, valor]) => {
            console.log(`\nCliente: ${cliente.nome}`);
            console.log(`Valor total de consumo: R$ ${valor.toFixed(2)}`);
        });
    }      
}
