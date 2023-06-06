/* eslint-disable jsx-a11y/anchor-is-valid */
export default function DetalhesServico(props) {
    let tema = props.tema
    const { nome, valor } = this.props;
    return (
        <div>
        <h1>Detalhes do Cliente</h1>
        <p>Nome: {nome}</p>
        <p>Valor: {valor}</p>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Editar</button>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Excluir</button>
        </div>
      </div>
    );
}