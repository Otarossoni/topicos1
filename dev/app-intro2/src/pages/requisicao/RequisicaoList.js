import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const RequisicaoList = (props) => {
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

  const dateBodyTemplate = (rowData) => {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(rowData.dataHoraCriada));
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <h4>Listagem de Requisições</h4>
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
          value={props.requisicoes}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} a {last} de {totalRecords}"
          rows={5}
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.requisicao}
          onSelectionChange={(e) => props.setRequisicao(e.value)}
        >
          <Column
            field="dataHoraCriada"
            header="Data de Criação"
            body={dateBodyTemplate}
            sortable
          ></Column>
          <Column field="titulo" header="Título" sortable filter></Column>
          <Column
            field="solicitante.nome"
            header="Solicitante"
            sortable
          ></Column>
          <Column field="status" header="Status" sortable filter></Column>
          <Column
            field="tipoRequisicao.descricao"
            header="Tipo"
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

export default RequisicaoList;
