import { Calendar } from "primereact/calendar";
const RequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [name]: value });
  };
  return (
    <form>
      <div class="form-group">
        <label>Título</label>
        <input
          class="form-control"
          type="text"
          name="titulo"
          value={props.requisicao.titulo}
          onChange={handleInputChange}
        />
      </div>

      <div class="form-group">
        <label>Descrição</label>
        <input
          class="form-control"
          type="text"
          name="descricao"
          value={props.requisicao.descricao}
          onChange={handleInputChange}
        />
      </div>

      <div class="form-group">
        <label>Data de Criação</label>
        <br />
        <Calendar
          name="dataHoraCriada"
          value={props.requisicao.dataHoraCriada}
          onChange={handleInputChange}
          dateFormat="dd/mm/yy"
          showTime
          hourFormat="24"
          showIcon
        ></Calendar>
      </div>

      <div class="form-group">
        <label>Status</label>
        <input
          class="form-control"
          type="text"
          name="status"
          value={props.requisicao.status}
          onChange={handleInputChange}
        />
      </div>

      <div class="form-group">
        <label>Prazo</label>
        <br />
        <Calendar
          name="prazoAtendimento"
          value={props.requisicao.prazoAtendimento}
          onChange={handleInputChange}
          dateFormat="dd/mm/yy"
          showTime
          hourFormat="24"
          showIcon
        ></Calendar>
      </div>

      <div class="form-group">
        <label>Tipo</label>
        <input
          class="form-control"
          type="text"
          name="tipoRequisicao"
          value={props.requisicao.tipoRequisicao}
          onChange={handleInputChange}
        />
      </div>

      <div class="form-group">
        <label>Solicitante</label>
        <input
          class="form-control"
          type="text"
          name="solicitante"
          value={props.requisicao.solicitante}
          onChange={handleInputChange}
        />
      </div>

      <div class="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default RequisicaoForm;
