import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import SolicitanteSrv from "../solicitante/SolicitanteSrv";
import TipoRequisicaoSrv from "../tipoRequisicao/TipoRequisicaoSrv";

const RequisicaoForm = (props) => {
  const [tiposRequisicao, setTiposRequisicao] = useState([]);
  const [solicitantes, setSolicitantes] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [name]: value });
  };

  useEffect(() => {
    onClickAtualizarSolicitante();
    onClickAtualizarTipo();
  }, []);

  const onClickAtualizarSolicitante = () => {
    SolicitanteSrv.listar()
      .then((response) => {
        setSolicitantes(response.data);
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
      <div
        style={{
          paddingRight: 470,
          paddingLeft: 470,
          paddingTop: 20,
          textAlign: "center",
        }}
      >
        <div className="card" style={{ border: "none" }}>
          <h5>Cadastro de Requisições</h5>
          <p />
          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
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
                  defaultValue={props.requisicao.titulo}
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
            <div className="field col-12 md:col-4">
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
                  defaultValue={props.requisicao.descricao}
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
            <div className="field col-12 md:col-4">
              <Calendar
                name="dataHoraCriada"
                showTime
                showIcon
                dateFormat="dd/mm/yy"
                hourFormat="24"
                defaultValue={props.requisicao.dataHoraCriada}
                onChange={handleInputChange}
                placeholder="Data Criação"
              />
              {errors.dataHoraCriada && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.dataHoraCriada.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
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
                  defaultValue={props.requisicao.status}
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
            <div className="field col-12 md:col-4">
              <span>
                <Calendar
                  name="prazoAtendimento"
                  showTime
                  showIcon
                  dateFormat="dd/mm/yy"
                  hourFormat="24"
                  defaultValue={props.requisicao.prazoAtendimento}
                  onChange={handleInputChange}
                  placeholder="Prazo"
                />
              </span>
              {errors.prazoAtendimento && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.prazoAtendimento.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="tipoRequisicao"
                  defaultValue={props.requisicao.tiposRequisicao}
                  onChange={handleInputChange}
                  options={tiposRequisicao}
                  optionLabel="descricao"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="tipoRequisicao">Tipo de Requisição</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="solicitante"
                  defaultValue={props.requisicao.solicitante}
                  onChange={handleInputChange}
                  options={solicitantes}
                  optionLabel="nome"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="solicitante">Solicitante</label>
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
export default RequisicaoForm;
