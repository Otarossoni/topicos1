import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import ColaboradorSrv from "../colaborador/ColaboradorSrv";
import AtividadeSrv from "../atividade/AtividadeSrv";

const AndamentoForm = (props) => {
  const [atividades, setAtividades] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setAndamento({ ...props.andamento, [name]: value });
  };

  useEffect(() => {
    onClickAtualizarColaborador();
    onClickAtualizarTipo();
  }, []);

  const onClickAtualizarColaborador = () => {
    ColaboradorSrv.listar()
      .then((response) => {
        setColaboradores(response.data);
      })
      .catch((e) => {});
  };

  const onClickAtualizarTipo = () => {
    AtividadeSrv.listar()
      .then((response) => {
        setAtividades(response.data);
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
          <h5>Cadastro de Andamentos</h5>
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
                  defaultValue={props.andamento.titulo}
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
                  defaultValue={props.andamento.descricao}
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
                name="dataHora"
                showTime
                showIcon
                dateFormat="dd/mm/yy"
                hourFormat="24"
                defaultValue={props.andamento.dataHora}
                onChange={handleInputChange}
                placeholder="Data Criação"
              />
              {errors.dataHora && (
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "small",
                  }}
                >
                  {errors.dataHora.message}
                </span>
              )}
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="atividade"
                  defaultValue={props.andamento.atividades}
                  onChange={handleInputChange}
                  options={atividades}
                  optionLabel="titulo"
                  optionValue="_id"
                  editable
                />
                <label htmlFor="atividade">Atividade</label>
              </span>
            </div>
          </div>
          <br />

          <div className="p-fluid grid formgrid" style={{ position: "center" }}>
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  name="colaborador"
                  defaultValue={props.andamento.colaborador}
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
export default AndamentoForm;
