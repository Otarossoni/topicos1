import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const AndamentoList = (props) => {
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
    }).format(new Date(rowData.dataHora));
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <h4>Listagem de Andamentos</h4>
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
          value={props.andamentos}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.andamento}
          onSelectionChange={(e) => props.setAndamento(e.value)}
        >
          <Column
            field="dataHora"
            header="Data"
            body={dateBodyTemplate}
            sortable
          ></Column>
          <Column field="titulo" header="Título" sortable filter></Column>
          <Column field="descricao" header="Descrição" sortable filter></Column>
          <Column
            field="colaborador.nome"
            header="Colaborador"
            sortable
          ></Column>
          <Column field="atividade.titulo" header="Atividade" sortable></Column>
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

export default AndamentoList;
