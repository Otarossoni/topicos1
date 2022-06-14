import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const SolicitanteList = (props) => {
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <h4>Listagem de Solicitantes</h4>
      <div style={{ margin: "10px" }}>
        <Button
          onClick={props.onClickAtualizar}
          className="p-button-rounded p-button-text"
        >
          <i class="pi pi-refresh" />
        </Button>
        <span> </span>
        <Button
          className="p-button-rounded p-button-text"
          onClick={props.inserir}
        >
          <i class="pi pi-plus-circle" />
        </Button>
      </div>

      <div className="card">
        <DataTable
          value={props.solicitantes}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.solicitante}
          onSelectionChange={(e) => props.setSolicitante(e.value)}
        >
          <Column field="_id" header="Id" sortable></Column>
          <Column field="nome" header="Nome" sortable filter></Column>
          <Column field="email" header="E-mail" sortable filter></Column>
          <Column field="senha" header="Senha" sortable></Column>
          <Column
            header="Operações"
            body={(row) => {
              return (
                <>
                  <Button
                    onClick={() => props.editar(row._id)}
                    className="p-button-rounded p-button-text"
                  >
                    <i class="pi pi-pencil"></i>
                  </Button>
                  <span> </span>
                  <Button
                    onClick={() => props.excluir(row._id)}
                    className="p-button-rounded p-button-text"
                  >
                    <i class="pi pi-trash"></i>
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

export default SolicitanteList;
