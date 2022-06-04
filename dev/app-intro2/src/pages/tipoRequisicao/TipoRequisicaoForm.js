import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

const TipoRequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipoRequisicao({ ...props.tipoRequisicao, [name]: value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
          <h5>Cadastro de Tipos de Requisição</h5>
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              <InputText
                name="descricao"
                placeholder="Descrição"
                {...register("descricao", {
                  required: {
                    value: true,
                    message: "A descrição é obrigatória!",
                  },
                  maxLength: {
                    value: 100,
                    message: "A descrição pode ter no máximo 100 caractéres!",
                  },
                  minLength: {
                    value: 5,
                    message: "A descrição pode ter no mínimo 5 caractéres!",
                  },
                })}
                defaultValue={props.tipoRequisicao.descricao}
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
          </div>{" "}
          <br />
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
export default TipoRequisicaoForm;
