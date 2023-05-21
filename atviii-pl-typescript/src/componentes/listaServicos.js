/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServico(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">Servico 1</a>
                <a href="#" className="list-group-item list-group-item-action">Servico 2</a>
                <a href="#" className="list-group-item list-group-item-action">Servico 3</a>
                <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Servico 4</a>
                <a href="#" className="list-group-item list-group-item-action">Servico 5</a>
                <a href="#" className="list-group-item list-group-item-action">Servico 6</a>
            </div>
        </div>
    )
}