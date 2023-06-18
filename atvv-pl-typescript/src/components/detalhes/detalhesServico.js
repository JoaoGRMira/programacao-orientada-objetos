/* eslint-disable jsx-a11y/anchor-is-valid */
export default function DetalhesServico(props) {
  const { servico, voltarLista } = props;

    return (
      <div style={{ marginLeft: "40px", marginTop: "30px"}}>
        <p><b>Nome:</b> {servico.nome}</p>
        <p><b>Valor:</b> {servico.valor}</p>

        <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px"}}>
          Editar
        </button>
        <button type="button" className="btn btn-danger" style={{ width: "100px", left:"10px" }}>
          Excluir
        </button>
        <button type="button" className="btn btn-secondary" style={{ marginLeft:'20px', width: "100px", left:"10px" }} onClick={voltarLista}>
        Voltar
      </button>
      </div>
    );
}