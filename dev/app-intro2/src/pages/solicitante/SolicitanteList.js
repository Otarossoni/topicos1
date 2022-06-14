import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const SolicitanteList = (props) => {
  const paginatorLeft = (
    <Link to={"/"} activeClassName="current">
      <Button type="button" icon="pi pi-home" className="p-button-text" />
    </Link>
  );
  const paginatorRight = (
    <a
      href="https://github.com/Otarossoni/topicos1"
      target="_blank"
      rel="noreferrer"
    >
      <Button type="button" icon="pi pi-github" className="p-button-text" />
    </a>
  );

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <h4>Listagem de Solicitantes</h4>
      <div
        style={{
          margin: "1%",
          textAlign: "left",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <Button
          onClick={props.onClickAtualizar}
          className="p-button-rounded p-button-text"
          label="Atualizar"
          icon="pi pi-refresh"
        ></Button>
        <span> </span>
        <Button
          className="p-button-rounded p-button-text"
          onClick={props.inserir}
          label="Adicionar"
          icon="pi pi-plus-circle"
        ></Button>
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
