import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import ColaboradorList from "./ColaboradorList";
import ColaboradorForm from "./ColaboradorForm";
import ColaboradorSrv from "./services/ColaboradorSrv";
import PrimeReact from "primereact/api";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const toastRef = useRef();
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);
  const onClickAtualizar = () => {
    ColaboradorSrv.listar()
      .then((response) => {
        setColaboradores(response.data);
        console.log("Colaboradores atualizados");
        toastRef.current.show({
          severity: "success",
          summary: "Colaboradores Atualizados!",
          life: 3000,
        });
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

  // operação inserir
  const initialState = { id: null, nome: "", email: "", senha: "" };
  const [colaborador, setColaborador] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const inserir = () => {
    setColaborador(initialState);
    setEditando(true);
  };
  const salvar = () => {
    if (colaborador._id == null) {
      // inclussão
      ColaboradorSrv.incluir(colaborador)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else {
      // alteração
      ColaboradorSrv.alterar(colaborador)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };

  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
  };
  const editar = (id) => {
    setColaborador(
      colaboradores.filter((colaborador) => colaborador._id == id)[0]
    );
    setEditando(true);
  };
  const excluir = (_id) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(_id),
    });
  };

  const excluirConfirm = (_id) => {
    ColaboradorSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };

  if (!editando) {
    return (
      <div className="App">
        <ConfirmDialog />
        <ColaboradorList
          colaboradores={colaboradores}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <ColaboradorForm
          colaborador={colaborador}
          setColaborador={setColaborador}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}
export default App;
