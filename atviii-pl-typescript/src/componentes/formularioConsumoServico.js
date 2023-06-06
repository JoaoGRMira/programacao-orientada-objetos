export default function FormularioConsumoServico(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do serviço" aria-label="Nome do serviço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{background: "#AB8262", color: "#faf6f6"}}>Solicitar</button>
                </div>
            </form>
        </div> 
    )
}