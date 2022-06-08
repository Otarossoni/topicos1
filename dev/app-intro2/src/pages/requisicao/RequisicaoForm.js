import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.salvar();
  };

  const onClickAtualizarTipo = () => {
    TipoRequisicaoSrv.listar()
      .then((response) => {
        setTiposRequisicao(response.data);
      })
      .catch((e) => {});
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
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <InputText
                name="titulo"
                placeholder="Título"
                {...register("titulo", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                defaultValue={props.requisicao.titulo}
                onChange={handleInputChange}
              />
              {errors.titulo && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.titulo.message}
                </span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <InputText
                name="descricao"
                placeholder="Descrição"
                {...register("descricao", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                defaultValue={props.requisicao.descricao}
                onChange={handleInputChange}
              />
              {errors.descricao && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.descricao.message}
                </span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <Calendar
                name="dataHoraCriada"
                placeholder="Data de Criação"
                {...register("dataHoraCriada", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                defaultValue={props.requisicao.dataHoraCriada}
                onChange={handleInputChange}
                showTime
                showIcon
                dateFormat="dd/mm/yy"
                hourFormat="24"
              />
              {errors.dataHoraCriada && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.dataHoraCriada.message}
                </span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <InputText
                name="status"
                placeholder="Status"
                {...register("status", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                defaultValue={props.requisicao.status}
                onChange={handleInputChange}
              />
              {errors.status && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.status.message}
                </span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <Calendar
                name="prazo"
                placeholder="Prazo"
                {...register("prazo", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                defaultValue={props.requisicao.prazo}
                onChange={handleInputChange}
                showTime
                showIcon
                dateFormat="dd/mm/yy"
                hourFormat="24"
              />
              {errors.prazo && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.prazo.message}
                </span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <Dropdown
                name="tipoRequisicao"
                placeholder="Tipo"
                {...register("tipoRequisicao", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                value={props.requisicao.tipoRequisicao}
                options={tipoRequisicao}
                onChange={handleInputChange}
                optionLabel="descricao"
                optionValue="_id"
                editable
              />
              {errors.tipo && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.status.tipo}
                </span>
              )}
            </div>
          </div>
          <br />
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <Dropdown
                name="solicitante"
                placeholder="Solicitante"
                {...register("solicitante", {
                  required: {
                    value: true,
                    message: "O campo é obrigatório",
                  },
                  maxLength: {
                    value: 50,
                    message: "Tamanho Máximo: 50 caractéres",
                  },
                  minLength: {
                    value: 2,
                    message: "Tamanho Mínimo: 2 caractéres",
                  },
                })}
                value={props.requisicao.solicitante}
                options={solicitante}
                onChange={handleInputChange}
                optionLabel="nome"
                optionValue="_id"
                editable
              />
              {errors.solicitante && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.solicitante.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              icon="pi pi-pencil"
              className="p-button-rounded p-button-text"
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
