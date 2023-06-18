import { Component } from "react";

type props = {
    tema: string
}

export default class ListaClientesMaisConsumiramQuantidade extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="1"
                    >
                        Consumo 1
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="2"
                    >
                        Consumo 2
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="3"
                    >
                        Consumo 3
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="4"
                    >
                        Consumo 4
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="5"
                    >
                        Consumo 5
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="6"
                    >
                        Consumo 6
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="7"
                    >
                        Consumo 7
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="8"
                    >
                        Consumo 8
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="9"
                    >
                        Consumo 9
                    </a>
                    <a
                        href="/consumo-x"
                        className="list-group-item list-group-item-action"
                        data-cliente-id="10"
                    >
                        Consumo 10
                    </a>
                </div>
            </div>
        )
    }
}