/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

export default function BarraNavegacao(props) {
  const [dropdownCadastrarAberto, setDropdownCadastrarAberto] = useState(false);
  const [dropdownConsumirAberto, setDropdownConsumirAberto] = useState(false);
  const [dropdownListagemAberto, setDropdownListagemAberto] = useState(false);
  const [dropdownConsumosAberto, setDropdownConsumosAberto] = useState(false); 

  const alternarDropdownCadastrar = () => {
    setDropdownCadastrarAberto(!dropdownCadastrarAberto);
  };

  const alternarDropdownConsumir = () => {
    setDropdownConsumirAberto(!dropdownConsumirAberto);
  };
  const alternarDropdownListagem = () => {
    setDropdownListagemAberto(!dropdownListagemAberto);
  };
  const alternarDropdownConsumos = () => {
    setDropdownConsumosAberto(!dropdownConsumosAberto);
  };

  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor) => {
        if (valor === "Cadastrar") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownCadastrarAberto ? "show" : ""
              }`}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  dropdownCadastrarAberto ? "active" : ""
                } text-white`}
                href="#"
                role="button"
                id="dropdownCadastrar"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={dropdownCadastrarAberto ? "true" : "false"}
                onClick={alternarDropdownCadastrar}
              >
                {valor}
              </a>
              <ul
                className={`dropdown-menu ${
                  dropdownCadastrarAberto ? "show" : ""
                }`}
                aria-labelledby="dropdownCadastrar"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Cliente", e)}
                  >
                    Cliente
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Pet", e)}
                  >
                    Pet
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Produto", e)}
                  >
                    Produto
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Serviço", e)}
                  >
                    Serviço
                  </a>
                </li>
              </ul>
            </li>
          );
        } else if (valor === "Consumir") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownConsumirAberto ? "show" : ""
              }`}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  dropdownConsumirAberto ? "active" : ""
                } text-white`}
                href="#"
                role="button"
                id="dropdownConsumir"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={dropdownConsumirAberto ? "true" : "false"}
                onClick={alternarDropdownConsumir}
              >
                {valor}
              </a>
              <ul
                className={`dropdown-menu ${
                  dropdownConsumirAberto ? "show" : ""
                }`}
                aria-labelledby="dropdownConsumir"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Consumir produto", e)}
                  >
                    Consumir produto
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Consumir serviço", e)}
                  >
                    Consumir serviço
                  </a>
                </li>
              </ul>
            </li>
          );
        } else
        if (valor === "Listagem") {
            return (
              <li
                key={valor}
                className={`nav-item dropdown ${
                  dropdownListagemAberto ? "show" : ""
                }`}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    dropdownListagemAberto ? "active" : ""
                  } text-white`}
                  href="#"
                  role="button"
                  id="dropdownListagem"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={dropdownListagemAberto ? "true" : "false"}
                  onClick={alternarDropdownListagem}
                >
                  {valor}
                </a>
                <ul
                  className={`dropdown-menu ${
                    dropdownListagemAberto ? "show" : ""
                  }`}
                  aria-labelledby="dropdownListagem"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Lista clientes", e)}
                    >
                      Lista clientes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Lista pets", e)}
                    >
                      Lista pets
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Lista produtos", e)}
                    >
                      Lista produtos
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Lista serviços", e)}
                    >
                      Lista serviços
                    </a>
                  </li>
                </ul>
              </li>
            );
          } else
          if (valor === "Consumos") {
            return (
              <li
                key={valor}
                className={`nav-item dropdown ${
                  dropdownConsumosAberto ? "show" : ""
                }`}
              >
                <a
                  className={`nav-link dropdown-toggle ${
                    dropdownConsumosAberto ? "active" : ""
                  } text-white`}
                  href="#"
                  role="button"
                  id="dropdownConsumos"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={dropdownConsumosAberto ? "true" : "false"}
                  onClick={alternarDropdownConsumos}
                >
                  {valor}
                </a>
                <ul
                  className={`dropdown-menu ${
                    dropdownConsumosAberto ? "show" : ""
                  }`}
                  aria-labelledby="dropdownConsumos"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("10 clientes que mais consumiram em quantidade", e)}
                    >
                      10 clientes que mais consumiram em quantidade
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("5 clientes que mais consumiram em valor", e)}
                    >
                      5 clientes que mais consumiram em valor
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Serviços/produtos mais consumidos", e)}
                    >
                      Serviços/produtos mais consumidos
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Serviços/produtos mais consumidos por tipo e raça de pets", e)}
                    >
                      Serviços/produtos mais consumidos por tipo e raça de pets
                    </a>
                  </li>
                </ul>
              </li>
            );
          } else {
          return (
            <li key={valor} className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => props.seletorView(valor, e)}
              >
                {valor}
              </a>
            </li>
          );
        }
      });

      return lista;
    }
  };

  let tema = props.tema;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="light"
        style={{ backgroundColor: "#AB8262", marginBottom: 10 }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: "#faf6f6" }}>
            <img
              src="/iconePet2.png"
              width="25"
              height="25"
              className="d-inline-block align-top"
              alt=""
            />
            PetLovers
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{gerarListaBotoes()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}
