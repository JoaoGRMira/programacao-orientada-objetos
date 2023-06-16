/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProduto(props) {
    let tema = props.tema

    const seletorView = (view, event) => {
    };
    
    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <div className="list-group" style={{ width: "600px" }}>
                <a
                    href="/produto-x"
                    className="list-group-item list-group-item-action"
                    data-cliente-id="1"
                    onClick={(e) => seletorView("DetalhesProduto", e)}
                >
                    Produto 1
                </a>
                <a
                    href="/produto-x"
                    className="list-group-item list-group-item-action"
                    data-cliente-id="2"
                    onClick={(e) => seletorView("DetalhesProduto", e)}
                >
                    Produto 2
                </a>
                <a
                    href="/produto-x"
                    className="list-group-item list-group-item-action"
                    data-cliente-id="3"
                    onClick={(e) => seletorView("DetalhesProduto", e)}
                >
                    Produto 3
                </a>
                <a
                    href="/produto-x"
                    className="list-group-item list-group-item-action"
                    data-cliente-id="4"
                    onClick={(e) => seletorView("DetalhesProduto", e)}
                >
                    Produto 4
                </a>
                <a
                    href="/produto-x"
                    className="list-group-item list-group-item-action"
                    data-cliente-id="5"
                    onClick={(e) => seletorView("DetalhesProduto", e)}
                >
                    Produto 5
                </a>
                <a
                    href="/produto-x"
                    className="list-group-item list-group-item-action"
                    data-cliente-id="6"
                    onClick={(e) => seletorView("DetalhesProduto", e)}
                >
                    Produto 6
                </a>
            </div>
        </div>
    )
}