import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const RequisicaoList = (props) => {
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );

  return (
    <div className="App">
      <br />
      <h4>LISTAGEM DE REQUISIÇÕES</h4>
      <div style={{ margin: "1%" }}>
        <button
          className="btn btn-primary btn-sm"
          onClick={props.onClickAtualizar}
        >
          Atualizar <i class="pi pi-refresh"></i>
        </button>
        <span> </span>
        <button className="btn btn-success btn-sm" onClick={props.inserir}>
          Adicionar <i class="pi pi-plus"></i>
        </button>
      </div>

      <div className="card">
        <DataTable
          value={props.requisicoes}
          responsiveLayout="scroll"
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          selectionMode="single"
          selection={props.requisicoao}
          onSelectionChange={(e) => props.setRequisicao(e.value)}
        >
          <Column
            field="dataHoraCriada"
            header="Data de Criação"
            sortable
          ></Column>
          <Column
            field="solicitante.nome"
            header="Solicitante"
            sortable
          ></Column>
          {/* <Column field="_id" header="Id" sortable></Column> */}
          <Column field="titulo" header="Título" sortable filter></Column>
          {/* <Column field="descricao" header="Descrição" sortable filter></Column> */}
          {/* <Column field="prazoAtendimento" header="Prazo" sortable></Column> */}
          <Column
            field="tipoRequisicao.descricao"
            header="Tipo"
            sortable
          ></Column>
          <Column field="status" header="Status" sortable></Column>

          <Column
            header="Operações"
            body={(row) => {
              return (
                <>
                  <button
                    onClick={() => props.editar(row._id)}
                    className="btn btn-warning btn-sm"
                  >
                    <i class="pi pi-pencil"></i>
                  </button>
                  <span> </span>
                  <button
                    onClick={() => props.excluir(row._id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i class="pi pi-trash"></i>
                  </button>
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