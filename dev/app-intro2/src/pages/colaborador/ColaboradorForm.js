import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setColaborador({ ...props.colaborador, [name]: value });
  };

  const [contraSenha, setContraSenha] = useState();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    if (contraSenha !== props.colaborador.senha) {
      setError("senha", {
        type: "custom",
        message: "As senhas são diferentes",
      });
    } else {
      props.salvar();
    }
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
          <h5>Cadastro de Colaboradores</h5>
          <div className="p-fluid grid formgrid">
            <div
              className="field col-12 md:col-4"
              style={{ textAlign: "center" }}
            >
              <InputText
                name="nome"
                placeholder="Nome"
                {...register("nome", {
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
                defaultValue={props.colaborador.nome}
                onChange={handleInputChange}
              />
              {errors.nome && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.nome.message}
                </span>
              )}
            </div>
          </div>{" "}
          <br />
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <InputText
                name="email"
                placeholder="exemplo@exemplo.net.br"
                {...register("email", {
                  required: { value: true, message: "O email é obrigatório!" },
                  maxLength: {
                    value: 100,
                    message: "O email pode ter no máximo 100 caracteres!",
                  },
                  minLength: {
                    value: 10,
                    message: "O nome deve ter no mínimo 10 caracteres!",
                  },
                })}
                defaultValue={props.colaborador.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>{" "}
          <br />
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <Password
                name="senha"
                placeholder="Senha"
                {...register("senha", {})}
                defaultValue={props.colaborador.senha}
                onChange={handleInputChange}
                toggleMask
              />
              {errors.senha && (
                <span
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {errors.senha.message}
                </span>
              )}
            </div>
          </div>{" "}
          <br />
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <Password
                name="contraSenha"
                placeholder="Repetir senha"
                defaultValue={contraSenha}
                onChange={(e) => setContraSenha(e.target.value)}
                toggleMask
              />
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
export default ColaboradorForm;
