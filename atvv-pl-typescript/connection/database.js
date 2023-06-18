const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");

// Cria instância de conexão com o banco
const cliente = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'fatec',
  database: 'petLovers'
});

function cadastrarCliente(nome, nomeSocial, dataCadastro, cpf, dataCpf, rg, dataRg, ddd, telefone, res) {
  const queryTelefone = `
    INSERT INTO Telefone ("ddd", "numero")
    VALUES ($1, $2)
    RETURNING id
  `;
  const valuesTelefone = [ddd, telefone];

  cliente.query(queryTelefone, valuesTelefone, (err, telefoneResult) => {
    if (err) {
      console.log('Erro SQL:', err);
      res.send({ msg: 'Erro ao cadastrar cliente' });
    } else {
      const telefoneId = telefoneResult.rows[0].id; // Obtém o ID do telefone inserido

      const queryCpf = `
        INSERT INTO CPF ("valor", "dataemissao")
        VALUES ($1, $2)
        RETURNING id
      `;
      const valuesCpf = [cpf, dataCpf];

      const queryRg = `
        INSERT INTO RG ("valor", "dataemissao")
        VALUES ($1, $2)
        RETURNING id
      `;
      const valuesRg = [rg, dataRg];

      cliente.query(queryRg, valuesRg, (err, rgResult) => {
        if (err) {
          console.log('Erro SQL:', err);
          res.send({ msg: 'Erro ao cadastrar cliente' });
        } else {
          const rgId = rgResult.rows[0].id; // Obtém o ID do RG inserido

          const queryCli = `
            INSERT INTO Clientes ("nome", "nomesocial", "datacadastro", "cpf")
            VALUES ($1, $2, $3, $4)
            RETURNING id
          `;
          const valuesCli = [nome, nomeSocial, dataCadastro, cpf];

          cliente.query(queryCpf, valuesCpf, (err, cpfResult) => {
            if (err) {
              console.log('Erro SQL:', err);
              res.send({ msg: 'Erro ao cadastrar cliente' });
            } else {
              const cpfId = cpfResult.rows[0].id; // Obtém o ID do CPF inserido

              cliente.query(queryCli, valuesCli, (err, cliResult) => {
                if (err) {
                  console.log('Erro SQL:', err);
                  res.send({ msg: 'Erro ao cadastrar cliente' });
                } else {
                  const clienteId = cliResult.rows[0].id; // Obtém o ID do cliente inserido

                  const queryClientesRGs = `
                    INSERT INTO Clientes_RGs (cliente_id, rg_id)
                    VALUES ($1, $2)
                  `;
                  const valuesClientesRGs = [clienteId, rgId];

                  cliente.query(queryClientesRGs, valuesClientesRGs, (err, clientesRgsResult) => {
                    if (err) {
                      console.log('Erro SQL:', err);
                      res.send({ msg: 'Erro ao cadastrar cliente' });
                    } else {
                      const queryClientesTelefones = `
                        INSERT INTO Clientes_Telefones (cliente_id, telefone_id)
                        VALUES ($1, $2)
                      `;
                      const valuesClientesTelefones = [clienteId, telefoneId];

                      cliente.query(queryClientesTelefones, valuesClientesTelefones, (err, clientesTelefonesResult) => {
                        if (err) {
                          console.log('Erro SQL:', err);
                          res.send({ msg: 'Erro ao cadastrar cliente' });
                        } else {
                          res.send({ msg: 'Cliente cadastrado com sucesso' });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

function cadastrarPet(nome, tipo, raca, genero, cpfTutor, res) {
  const queryPet = `
      INSERT INTO Pets (nome, tipo, raca, genero)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;
  const valuesPet = [nome, tipo, raca, genero];

  cliente.query(queryPet, valuesPet, (err, petResult) => {
    if (err) {
      console.log("Erro SQL:", err);
      res.status(500).json({ error: "Erro ao cadastrar pet" });
    } else {
      const petId = petResult.rows[0].id; // Obtém o ID do pet inserido

      // Em seguida, procure o cliente com base no CPF do tutor
      const queryBuscaCliente = `
          SELECT id FROM Clientes WHERE cpf = $1
        `;
      const valuesCliente = [cpfTutor];

      cliente.query(queryBuscaCliente, valuesCliente, (err, clienteResult) => {
        if (err) {
          console.log("Erro SQL:", err);
          res.status(500).json({ error: "Erro ao buscar cliente" });
        } else if (clienteResult.rows.length === 0) {
          res.status(404).json({ error: "Cliente não encontrado" });
        } else {
          const clienteId = clienteResult.rows[0].id; // Obtém o ID do cliente encontrado

          // Por fim, insira a relação entre o cliente e o pet na tabela Clientes_Pets
          const queryClientePet = `
              INSERT INTO Clientes_Pets (cliente_id, pet_id)
              VALUES ($1, $2)
            `;
          const valuesClientePet = [clienteId, petId];

          cliente.query(queryClientePet, valuesClientePet, (err) => {
            if (err) {
              console.log("Erro SQL:", err);
              res.status(500).json({ error: "Erro ao cadastrar relação cliente-pet" });
            } else {
              res.status(200).json({ message: "Pet cadastrado com sucesso" });
            }
          });
        }
      });
    }
  });
}

function cadastrarProduto(nome, valor, res) {
  const queryProduto = `
    INSERT INTO Produto (nome, valor)
    VALUES ($1, $2)
    RETURNING id
  `;
  const valuesProduto = [nome, valor];

  cliente.query(queryProduto, valuesProduto, (err) => {
    if (err) {
      console.log("Erro SQL:", err);
      res.status(500).json({ error: "Erro ao cadastrar produto" });
    } else {
      res.status(200).json({ message: "Produto cadastrado com sucesso" });
    }
  })
}

function cadastrarServico(nome, valor, res) {
  const queryServico = `
    INSERT INTO Servico (nome, valor)
    VALUES ($1, $2)
    RETURNING id
  `;
  const valuesServico = [nome, valor];

  cliente.query(queryServico, valuesServico, (err) => {
    if (err) {
      console.log("Erro SQL:", err);
      res.status(500).json({ error: "Erro ao cadastrar serviço" });
    } else {
      res.status(200).json({ message: "Serviço cadastrado com sucesso" });
    }
  })
}

function relacaoProduto(cpfCliente, nomePet, nomeProduto, res) {
  const queryBuscaCliente = `
    SELECT id FROM Clientes WHERE cpf = $1
  `;
  const valuesCliente = [cpfCliente];
  cliente.query(queryBuscaCliente, valuesCliente, (err, clienteResult) => {
    if (err) {
      console.log("Erro SQL:", err);
      res.status(500).json({ error: "Erro ao buscar cliente" });
      return;
    }

    if (clienteResult.rows.length === 0) {
      res.status(404).json({ error: "Cliente não encontrado" });
      return;
    }

    const clienteId = clienteResult.rows[0].id; // Obtém o ID do cliente encontrado

    const queryBuscaPet = `
      SELECT id FROM Pets WHERE nome = $1
    `;
    const valuesPet = [nomePet];
    cliente.query(queryBuscaPet, valuesPet, (err, petResult) => {
      if (err) {
        console.log("Erro SQL:", err);
        res.status(500).json({ error: "Erro ao buscar pet" });
        return;
      }

      if (petResult.rows.length === 0) {
        res.status(404).json({ error: "Pet não encontrado" });
        return;
      }

      const petId = petResult.rows[0].id; // Obtém o ID do pet encontrado

      const queryBuscaProduto = `
        SELECT id FROM Produto WHERE nome = $1
      `;
      const valuesProduto = [nomeProduto];
      cliente.query(queryBuscaProduto, valuesProduto, (err, produtoResult) => {
        if (err) {
          console.log("Erro SQL:", err);
          res.status(500).json({ error: "Erro ao buscar produto" });
          return;
        }

        if (produtoResult.rows.length === 0) {
          res.status(404).json({ error: "Produto não encontrado" });
          return;
        }

        const produtoId = produtoResult.rows[0].id; // Obtém o ID do produto encontrado

        const queryClienteProduto = `
          INSERT INTO Clientes_Produtos (cliente_id, produto_id)
          VALUES ($1, $2)
        `;
        const valuesClienteProduto = [clienteId, produtoId];

        cliente.query(queryClienteProduto, valuesClienteProduto, (err) => {
          if (err) {
            console.log("Erro SQL:", err);
            res.status(500).json({ error: "Erro ao cadastrar relação cliente-produto" });
            return;
          }

          const queryPetProduto = `
            INSERT INTO Pets_Produtos (pet_id, produto_id)
            VALUES ($1, $2)
          `;
          const valuesPetProduto = [petId, produtoId];

          cliente.query(queryPetProduto, valuesPetProduto, (err) => {
            if (err) {
              console.log("Erro SQL:", err);
              res.status(500).json({ error: "Erro ao cadastrar relação pet-produto" });
              return;
            }

            res.status(200).json({ message: "Produto consumido com sucesso" });
          });
        });
      });
    });
  });
}

function relacaoServico(cpfCliente, nomePet, nomeServico, res) {
  const queryBuscaCliente = `
    SELECT id FROM Clientes WHERE cpf = $1
  `;
  const valuesCliente = [cpfCliente];
  cliente.query(queryBuscaCliente, valuesCliente, (err, clienteResult) => {
    if (err) {
      console.log("Erro SQL:", err);
      res.status(500).json({ error: "Erro ao buscar cliente" });
      return;
    }

    if (clienteResult.rows.length === 0) {
      res.status(404).json({ error: "Cliente não encontrado" });
      return;
    }

    const clienteId = clienteResult.rows[0].id; // Obtém o ID do cliente encontrado

    const queryBuscaPet = `
      SELECT id FROM Pets WHERE nome = $1
    `;
    const valuesPet = [nomePet];
    cliente.query(queryBuscaPet, valuesPet, (err, petResult) => {
      if (err) {
        console.log("Erro SQL:", err);
        res.status(500).json({ error: "Erro ao buscar pet" });
        return;
      }

      if (petResult.rows.length === 0) {
        res.status(404).json({ error: "Pet não encontrado" });
        return;
      }

      const petId = petResult.rows[0].id; // Obtém o ID do pet encontrado

      const queryBuscaServico = `
        SELECT id FROM Servico WHERE nome = $1
      `;
      const valuesServico = [nomeServico];
      cliente.query(queryBuscaServico, valuesServico, (err, servicoResult) => {
        if (err) {
          console.log("Erro SQL:", err);
          res.status(500).json({ error: "Erro ao buscar serviço" });
          return;
        }

        if (servicoResult.rows.length === 0) {
          res.status(404).json({ error: "Serviço não encontrado" });
          return;
        }

        const servicoId = servicoResult.rows[0].id; // Obtém o ID do serviço encontrado

        const queryClienteServico = `
          INSERT INTO Clientes_Servicos (cliente_id, servico_id)
          VALUES ($1, $2)
        `;
        const valuesClienteServico = [clienteId, servicoId];

        cliente.query(queryClienteServico, valuesClienteServico, (err) => {
          if (err) {
            console.log("Erro SQL:", err);
            res.status(500).json({ error: "Erro ao cadastrar relação cliente-serviço" });
            return;
          }

          const queryPetServico = `
            INSERT INTO Pets_Servicos (pet_id, servico_id)
            VALUES ($1, $2)
          `;
          const valuesPetServico = [petId, servicoId];

          cliente.query(queryPetServico, valuesPetServico, (err) => {
            if (err) {
              console.log("Erro SQL:", err);
              res.status(500).json({ error: "Erro ao cadastrar relação pet-serviço" });
              return;
            }

            res.status(200).json({ message: "Serviço consumido com sucesso" });
          });
        });
      });
    });
  });
}

app.use(cors());
app.use(express.json());

app.post('/clientes', (req, res) => {
  // Extrai os dados enviados pelo cliente no corpo da requisição e os armazena nas variáveis correspondentes
  const { nome, nomeSocial, dataCadastro, cpf, dataCpf, rg, dataRg, ddd, telefone } = req.body;

  // Invoca a função de cadastrar cliente e utiliza os valores da requisição como argumentos
  cadastrarCliente(nome, nomeSocial, dataCadastro, cpf, dataCpf, rg, dataRg, ddd, telefone, res);
});

app.post("/pets", (req, res) => {
  const { nome, raca, genero, tipo, cpfTutor } = req.body;

  cadastrarPet(nome, tipo, raca, genero, cpfTutor, res);
});

app.post("/produtos", (req, res) => {
  const { nome, valor } = req.body;

  cadastrarProduto(nome, valor, res);
});

app.post("/servicos", (req, res) => {
  const { nome, valor } = req.body;

  cadastrarServico(nome, valor, res);
});

// Importe as dependências necessárias

app.post('/relacaoProduto', (req, res) => {
  const { cpfCliente, nomePet, nomeProduto } = req.body;

  // Chame a função relacaoProduto para realizar a relação cliente-produto
  relacaoProduto(cpfCliente, nomePet, nomeProduto, res);
});

app.post('/relacaoServico', (req, res) => {
  const { cpfCliente, nomePet, nomeServico } = req.body;

  // Chame a função relacaoServico para realizar a relação cliente-servico
  relacaoServico(cpfCliente, nomePet, nomeServico, res);
});

app.get("/listagemClientes", (req, res) => {
  cliente.query('SELECT nome FROM clientes', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Erro ao buscar clientes" });
    } else {
      res.json(result.rows);
    }
  });
});

app.get("/listagemClientes", (req, res) => {
  cliente.query('SELECT nome FROM clientes', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Erro ao buscar clientes" });
    } else {
      res.json(result.rows);
    }
  });
});

app.get("/listagemPets", (req, res) => {
  cliente.query('SELECT nome FROM pets', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Erro ao buscar pets" });
    } else {
      res.json(result.rows);
    }
  });
});

app.get("/listagemProdutos", (req, res) => {
  cliente.query('SELECT nome FROM produto', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Erro ao buscar produtos" });
    } else {
      res.json(result.rows);
    }
  });
});

app.get("/listagemServicos", (req, res) => {
  cliente.query('SELECT nome FROM servico', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Erro ao buscar serviços" });
    } else {
      res.json(result.rows);
    }
  });
});

// Testa o servidor
app.listen(3001, () => {
  console.log("Servidor sendo executado");
});
