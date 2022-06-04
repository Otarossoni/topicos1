import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const ColaboradorList = (props) => {
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  return (
    <div
      className="App"
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: "center",
      }}
    >
      <br />
      <h4>Listagem de Colaboradores</h4>
      <div style={{ margin: "1%", textAlign: "left" }}>
        <Button
          icon="pi pi-plus"
          className="p-button-rounded p-button-text"
          label="Adicionar"
          onClick={props.inserir}
        ></Button>
        <span> </span>
        <Button
          icon="pi pi-refresh"
          className="p-button-rounded p-button-text"
          label="Atualizar"
          onClick={props.onClickAtualizar}
        ></Button>
      </div>

      <div className="card">
        <DataTable
          value={props.colaboradores}
          responsiveLayout="scroll"
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.colaborador}
          onSelectionChange={(e) => props.setColaborador(e.value)}
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
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-text"
                  ></Button>
                  <span> </span>
                  <Button
                    onClick={() => props.excluir(row._id)}
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-text"
                  ></Button>
                </>
              );
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default ColaboradorList;
