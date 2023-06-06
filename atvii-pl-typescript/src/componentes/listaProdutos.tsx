/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

type props = {
    tema: string
    seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void
}

export default class ListaProduto extends Component<props> {
    render() {
        const { tema, seletorView } = this.props;
        return (
            <div className="container-fluid">
                <div className="list-group">
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
}