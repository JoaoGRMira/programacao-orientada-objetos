import Cliente from "../../modelo/cliente/cliente"
import CPF from "../../modelo/cliente/cpf"
import RG from "../../modelo/cliente/rg"
import Telefone from "../../modelo/cliente/telefone"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import ClientesProntos from "../clientesProntos";


export default class ClientesGerados extends ClientesProntos{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public gerarProntos(): void {
        let nome = "João da Silva"
        let nomeSocial = "Joãozinho"
        //
        let valor = "123.456.789-00";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        //
        let cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "12.345.678-9"
        let rg = new RG(valor, date)
        //
        let ddd = "12"
        let numero = "1234-5678"
        let telefone = new Telefone(ddd, numero)
        //
        let produtos = [
            "Arranhador para gatos",
            "Coleira antipulgas e carrapatos"
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        let servico = [
            "Consulta veterinária"]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Maria Santos"
        nomeSocial = "Ma"
        //
        valor = "987.654.321-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "98.765.432-1"
        rg = new RG(valor, date)
        //
        ddd = "22"
        numero = "9876-5432"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Ração para gatos"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Hospedagem para gatos"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Ana Oliveira"
        nomeSocial = "Ninha"
        //
        valor = "456.789.123-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "45.678.912-3"
        rg = new RG(valor, date)
        //
        ddd = "33"
        numero = "4567-8912"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Brinquedo interativo",
            "Caixa de areia"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Pet sitter"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Luiza Costa"
        nomeSocial = "Lu"
        //
        valor = "789.123.456-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "78.912.345-6"
        rg = new RG(valor, date)
        //
        ddd = "44"
        numero = "7891-2345"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Comedouro",
            "Bebedouro",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Banho e tosa para cães de porte grande"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Paula Mendes"
        nomeSocial = "Paty"
        //
        valor = "321.654.987-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "32.165.498-7"
        rg = new RG(valor, date)
        //
        ddd = "55"
        numero = "3216-5498"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Caminha acolchoada",
            "Escova de pelo"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Banho e tosa para cães de porte médio"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Carlos Gomes"
        nomeSocial = "Carlão"
        //
        valor = "654.987.321-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "65.498.732-1"
        rg = new RG(valor, date)
        //
        ddd = "66"
        numero = "6549-8732"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo hipoalergênico ",
            "Coleira antipulgas e carrapatos"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Passeio individual com cães"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Fernanda Lima"
        nomeSocial = "Fefe"
        //
        valor = "987.321.654-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "98.732.165-4"
        rg = new RG(valor, date)
        //
        ddd = "77"
        numero = "9873-2165"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Coleira de identificação personalizada ",
            "Brinquedo recheável com petiscos"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Banho e tosa para cães de porte pequeno"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Sandra Alves"
        nomeSocial = "San"
        //
        valor = "654.321.987-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "65.432.198-7"
        rg = new RG(valor, date)
        //
        ddd = "88"
        numero = "6543-2198"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Guia retrátil"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Passeio individual com cães"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Gabriela Sousa"
        nomeSocial = "Gabi"
        //
        valor = "321.987.654-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "32.198.765-4"
        rg = new RG(valor, date)
        //
        ddd = "99"
        numero = "3219-8765"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Escova de pelo"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "Pet taxi"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Roberto Ferreira"
        nomeSocial = "Beto"
        //
        valor = "987.654.321-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, cpf)
        //
        valor = "98.765.432-1"
        rg = new RG(valor, date)
        //
        ddd = "00"
        numero = "9876-5432"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Arranhador para gatos"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarValor = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.valorProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarValor))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "Hospedagem para gatos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarValor = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.valorServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarValor))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
    }
}