/* eslint-disable jsx-a11y/anchor-is-valid */
export default function DetalhesCliente(props) {
    let tema = props.tema
    const { nome, nomeSocial, cpf, rg, produtosConsumidos, servicosConsumidos } = this.props;
    return (
        <div>
        <h1>Detalhes do Cliente</h1>
        <p>Nome: {nome}</p>
        <p>Nome Social: {nomeSocial}</p>
        <p>CPF: {cpf}</p>
        <p>RG: {rg}</p>
        <p>Produtos consumidos: {produtosConsumidos}</p>
        <p>Serviços consumidos: {servicosConsumidos}</p>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Editar</button>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Excluir</button>
        </div>
      </div>
    );
}