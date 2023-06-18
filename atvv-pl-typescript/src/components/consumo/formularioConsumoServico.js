import axios from "axios";
import React, { useState } from "react";

export default function FormularioConsumoServico(props) {
    let tema = props.tema

    const [values, setValues] = useState({
        cpfCliente: '',
        nomePet: '',
        nomeServico: ''
    });

    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const clearCampos = () => {
        setValues({
            cpfCliente: '',
            nomePet: '',
            nomeServico: ''
        });
    };

    const handleClickButton = () => {
        axios.post("http://localhost:3001/relacaoServico", {
            cpfCliente: values.cpfCliente,
            nomePet: values.nomePet,
            nomeServico: values.nomeServico
        }).then((response) => {
            clearCampos();
        });
    }

    return (
        <div className="container-fluid" style={{ marginLeft: "30px" }}>
            <form>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" id="cpfCliente" name="cpfCliente" value={values.cpfCliente} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome do pet" aria-label="Nome do pet" aria-describedby="basic-addon1" id="nomePet" name="nomePet" value={values.nomePet} onChange={handleChangeValues} />
                </div>
                <div className="input-group mb-3" style={{ width: "600px" }}>
                    <input type="text" className="form-control" placeholder="Nome do serviço" aria-label="Nome do serviço" aria-describedby="basic-addon1" id="nomeServico" name="nomeServico" value={values.nomeServico} onChange={handleChangeValues} />
                </div>
                <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#AB8262", width: "100px", marginRight: "20px", marginBottom: "30px" }} onClick={handleClickButton}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}