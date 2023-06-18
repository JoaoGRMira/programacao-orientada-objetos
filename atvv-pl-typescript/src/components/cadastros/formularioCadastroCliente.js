import axios from "axios";
import React, { useState } from "react";

export default function FormularioCadastroCliente(props) {
  let tema = props.tema

  const [values, setValues] = useState({
    nome: '',
    nomeSocial: '',
    cpf: '',
    dataCpf: '',
    rg: '',
    dataRg: '',
    ddd: '',
    telefone: ''
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
      nome: '',
      nomeSocial: '',
      cpf: '',
      dataCpf: '',
      rg: '',
      dataRg: '',
      ddd: '',
      telefone: ''
    });
  };

  const handleClickButton = () => {
    const dataCadastro = new Date().toLocaleString();
    axios.post("http://localhost:3001/clientes", {
      nome: values.nome,
      nomeSocial: values.nomeSocial,
      dataCadastro: dataCadastro,
      cpf: values.cpf,
      dataCpf: values.dataCpf,
      rg: values.rg,
      dataRg: values.dataRg,
      ddd: values.ddd,
      telefone: values.telefone
    }).then((response) => {
      clearCampos();
    });
  }

  return (
    <div className="container-fluid" style={{ marginLeft: "30px" }}>
      <form>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" id="nome" name="nome" value={values.nome} onChange={handleChangeValues} />
        </div>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" id="nomeSocial" name="nomeSocial" value={values.nomeSocial} onChange={handleChangeValues} />
        </div>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" id="cpf" name="cpf" value={values.cpf} onChange={handleChangeValues} />
        </div>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input type="text" className="form-control" placeholder="Data de emissão CPF" aria-label="Data de emissão CPF" aria-describedby="basic-addon1" id="dataCpf" name="dataCpf" value={values.dataCpf} onChange={handleChangeValues} />
        </div>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" id="rg" name="rg" value={values.rg} onChange={handleChangeValues} />
        </div>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input type="text" className="form-control" placeholder="Data de emissão RG" aria-label="Data de emissão RG" aria-describedby="basic-addon1" id="dataRg" name="dataRg" value={values.dataRg} onChange={handleChangeValues} />
        </div>
        <div className="input-group mb-3 d-flex" >
          <input style={{ width: "65px", marginRight:'10px' }} type="text" className="form-control flex-grow-0 mr-2" placeholder="DDD" id="ddd" name="ddd" value={values.ddd} onChange={handleChangeValues}
          />
          <input
          style={{ width: "525px"}} type="text" className="form-control flex-grow-0 mr-2" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" id="telefone" name="telefone" value={values.telefone} onChange={handleChangeValues}
          />
        </div>
        <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#AB8262", width: "100px", marginRight: "20px", marginBottom: "30px" }} onClick={handleClickButton}>
          Cadastrar
        </button>
      </form>
    </div>
  )
}