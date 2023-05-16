import Cliente from "../../modelo/cliente/cliente";
import Listagem from "./listagem";

export default class ListagemConsQuant extends Listagem {
    private clientes: Array<Cliente>;
  
    constructor(clientes: Array<Cliente>) {
      super();
      this.clientes = clientes;
    }
  
    public listar(): void {
        console.log(`\nTop 10 clientes que mais consumiram produtos e serviços:`);
      
        const clientesOrdenados = this.clientes.sort((a, b) => {
        const totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
        const totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
        return totalB - totalA;
    });
      
        const top10Clientes = clientesOrdenados.slice(0, 10);
      
        top10Clientes.forEach((cliente, index) => {
            console.log(`\n${index + 1}. Cliente: ${cliente.nome}`);
            console.log(`   Total de produtos e serviços consumidos: ${cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length}`);
        });
    }      
}