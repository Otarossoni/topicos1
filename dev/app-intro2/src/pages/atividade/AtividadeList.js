import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const AtividadeList = (props) => {
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  const dateBodyTemplate = (rowData) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(rowData.agendaInicio));
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <h4>Listagem de Atividades</h4>
      <div style={{ margin: "10px" }}>
        <Button
          onClick={props.onClickAtualizar}
          className="p-button-rounded p-button-text"
        >
          <i className="pi pi-refresh" />
        </Button>
        <span> </span>
        <Button
          className="p-button-rounded p-button-text"
          onClick={props.inserir}
        >
          <i className="pi pi-plus-circle" />
        </Button>
      </div>

      <div className="card">
        <DataTable
          value={props.atividades}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.atividade}
          onSelectionChange={(e) => props.setAtividade(e.value)}
        >
          <Column
            field="agendaInicio"
            header="Início da agenda"
            body={dateBodyTemplate}
            sortable
          ></Column>
          <Column field="descricao" header="Descriçao" sortable filter></Column>
          <Column
            field="colaborador.nome"
            header="Colaborador"
            sortable
          ></Column>
          <Column field="status" header="Status" sortable filter></Column>
          <Column
            field="requisicao.titulo"
            header="Requisição"
            sortable
          ></Column>
          <Column
            header="Operações"
            body={(row) => {
              return (
                <>
                  <Button
                    onClick={() => props.editar(row._id)}
                    className="p-button-rounded p-button-text"
                  >
                    <i className="pi pi-pencil"></i>
                  </Button>
                  <span> </span>
                  <Button
                    onClick={() => props.excluir(row._id)}
                    className="p-button-rounded p-button-text"
                  >
                    <i className="pi pi-trash"></i>
                  </Button>
                </>
              );
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AtividadeList;