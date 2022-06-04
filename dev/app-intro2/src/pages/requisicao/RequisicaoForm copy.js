import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import SolicitanteSrv from "../solicitante/SolicitanteSrv";
import TipoRequisicaoSrv from "../tipoRequisicao/TipoRequisicaoSrv";

const RequisicaoForm = (props) => {
  const [tipoRequisicao, setTiposRequisicao] = useState([]);
  const [solicitante, setSolicitante] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [name]: value });
  };

  useEffect(() => {
    onClickAtualizarSolicitante(); // ao inicializar executa o método para atualizar
    onClickAtualizarTipo(); // ao inicializar executa o método para atualizar
  }, []);

  const onClickAtualizarSolicitante = () => {
    SolicitanteSrv.listar()
      .then((response) => {
        setSolicitante(response.data);
      })
      .catch((e) => {});
  };

  const onClickAtualizarTipo = () => {
    TipoRequisicaoSrv.listar()
      .then((response) => {
        setTiposRequisicao(response.data);
      })
      .catch((e) => {});
  };

  return (
    <form>
      <div className="form-group">
        <label>Título</label>
        <input
          className="form-control"
          type="text"
          name="titulo"
          value={props.requisicao.titulo}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Descrição</label>
        <input
          className="form-control"
          type="text"
          name="descricao"
          value={props.requisicao.descricao}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Data Criação</label>
        <br />
        <Calendar
          showTime
          showIcon
          dateFormat="dd/mm/yy"
          name="dataHoraCriada"
          hourFormat="24"
          value={props.requisicao.dataHoraCriada}
          onChange={handleInputChange}
        ></Calendar>
      </div>

      <div className="form-group">
        <label>Status</label>
        <input
          className="form-control"
          type="text"
          name="status"
          value={props.requisicao.status}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Prazo</label>
        <br />
        <Calendar
          showTime
          showIcon
          dateFormat="dd/mm/yy"
          name="prazoAtendimento"
          hourFormat="24"
          value={props.requisicao.prazoAtendimento}
          onChange={handleInputChange}
        ></Calendar>
      </div>

      <div className="form-group">
        <label>Tipo</label>
        <Dropdown
          name="tipoRequisicao"
          value={props.requisicao.tipoRequisicao}
          options={tipoRequisicao}
          onChange={handleInputChange}
          optionLabel="descricao"
          optionValue="_id"
          editable
        />
      </div>

      <div className="form-group">
        <label>Solicitante</label>
        <Dropdown
          name="solicitante"
          value={props.requisicao.solicitante}
          options={solicitante}
          onChange={handleInputChange}
          optionLabel="nome"
          optionValue="_id"
          editable
        />
        <p />
      </div>

      <div className="form-group">
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            onClick={props.salvar}
            className="btn btn-primary btn-sm"
          >
            <i class="pi pi-save" />
          </button>
          <span> </span>
          <button
            type="button"
            onClick={props.cancelar}
            className="btn btn-primary btn-sm"
          >
            <i class="pi pi-undo" />
          </button>
        </div>
      </div>
    </form>
  );
};
export default RequisicaoForm;
