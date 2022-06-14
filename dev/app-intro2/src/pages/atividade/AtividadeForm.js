import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import ColaboradorSrv from "../colaborador/ColaboradorSrv";
import RequisicaoSrv from "../requisicao/RequisicaoSrv";

const AtividadeForm = (props) => {
  const [requisicao, setRequisicao] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setAtividade({ ...props.atividade, [name]: value });
  };

  useEffect(() => {
    onClickAtualizarColaborador();
    onClickAtualizarRequisicao();
  }, []);

  const onClickAtualizarColaborador = () => {
    ColaboradorSrv.listar()
      .then((response) => {
        setColaboradores(response.data);
      })
      .catch((e) => {});
  };

  const onClickAtualizarRequisicao = () => {
    RequisicaoSrv.listar()
      .then((response) => {
        setRequisicao(response.data);
      })
      .catch((e) => {});
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    props.salvar();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: 15, textAlign: "center" }}>
        <div className="card" style={{ border: "none" }}>
          <h5>Cadastro de Atividades</h5>
          <p />
          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-4 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="titulo"
                  {...register("titulo", {
                    required: {
                      value: true,
                      message: "O campo título é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "O título pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 6,
                      message: "O título deve possuir no mínimo 6 caracteres!",
                    },
                  })}
                  defaultValue={props.atividade.titulo}
                  onChange={handleInputChange}
                />
                <label htmlFor="titulo">Título</label>
              </span>
              {errors.titulo && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.titulo.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid">
            <div className="field col-6 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="descricao"
                  {...register("descricao", {
                    required: {
                      value: true,
                      message: "A descrição é obrigatória!",
                    },
                    maxLength: {
                      value: 200,
                      message: "A descrição pode ter no máximo 200 caracteres!",
                    },
                    minLength: {
                      value: 20,
                      message:
                        "A descrição deve possuir no mínimo 20 caracteres!",
                    },
                  })}
                  defaultValue={props.atividade.descricao}
                  onChange={handleInputChange}
                />
                <label htmlFor="descricao">Descrição</label>
              </span>
              {errors.descricao && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.descricao.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-2 md:col-4">
              <span className="p-float-label">
                <InputText
                  name="status"
                  {...register("status", {
                    required: {
                      value: true,
                      message: "O campo status é obrigatório!",
                    },
                    maxLength: {
                      value: 50,
                      message: "O status pode ter no máximo 50 caracteres!",
                    },
                    minLength: {
                      value: 4,
                      message: "O status deve possuir no mínimo 4 caracteres!",
                    },
                  })}
                  defaultValue={props.atividade.status}
                  onChange={handleInputChange}
                />
                <label htmlFor="status">Status</label>
              </span>
              {errors.status && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.status.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-2 md:col-4">
              <span>
                <Calendar
                  name="prazo"
                  showTime
                  showIcon
                  dateFormat="dd/mm/yy"
                  hourFormat="24"
                  defaultValue={props.atividade.prazo}
                  onChange={handleInputChange}
                  placeholder="Prazo"
                />
              </span>
              {errors.prazo && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.prazo.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-2 md:col-4">
              <Calendar
                name="agendaInicio"
                showTime
                showIcon
                dateFormat="dd/mm/yy"
                hourFormat="24"
                defaultValue={props.atividade.agendaInicio}
                onChange={handleInputChange}
                placeholder="Agenda Início"
              />
              {errors.agendaInicio && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.agendaInicio.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-2 md:col-4">
              <Calendar
                name="dataHoraTermino"
                showTime
                showIcon
                dateFormat="dd/mm/yy"
                hourFormat="24"
                defaultValue={props.atividade.dataHoraTermino}
                onChange={handleInputChange}
                placeholder="Data Término"
              />
              {errors.dataHoraTermino && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.dataHoraTermino.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="col-2 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="requisicao"
                  defaultValue={props.atividade.requisicao}
                  onChange={handleInputChange}
                  options={requisicao}
                  optionLabel="descricao"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="requisicao">Requisição</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-2 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="colaborador"
                  defaultValue={props.atividade.colaborador}
                  onChange={handleInputChange}
                  options={colaboradores}
                  optionLabel="nome"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="colaborador">Colaborador</label>
              </span>
            </div>
          </div>
          <br />

          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              icon="pi pi-save"
              className="p-button-rounded p-button-text "
              label="Salvar"
            ></Button>
            <Button
              type="button"
              icon="pi pi-undo"
              className="p-button-rounded p-button-text"
              label="Cancelar"
              onClick={props.cancelar}
            ></Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AtividadeForm;