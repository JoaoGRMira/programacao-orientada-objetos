import axios from "axios";
import React, { useState } from "react";

export default function FormularioConsumoProduto(props) {
    let tema = props.tema

    const [values, setValues] = useState({
        cpfCliente: '',
        nomePet: '',
        nomeProduto: ''
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
            nomeProduto: ''
        });
    };

    const handleClickButton = () => {
        axios.post("http://localhost:3001/relacaoProduto", {
            cpfCliente: values.cpfCliente,
            nomePet: values.nomePet,
            nomeProduto: values.nomeProduto
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
                    <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1" id="nomeProduto" name="nomeProduto" value={values.nomeProduto} onChange={handleChangeValues} />
                </div>
                <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#AB8262", width: "100px", marginRight: "20px", marginBottom: "30px" }} onClick={handleClickButton}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}