import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ColaboradorList from "./ColaboradorList";
import ColaboradorForm from "./ColaboradorForm";

function App() {
  let colaboradoresList = [
    { id: 1, nome: "Otávio", email: "otávio@teste", senha: "123" },
    { id: 2, nome: "Monteiro", email: "monteiro@teste", senha: "456" },
  ];
  const [colaboradores, setColaboradores] = useState(colaboradoresList);
  const onClickAtualizar = () => {
    colaboradoresList = [
      { id: 1, nome: "Otávio", email: "otávio@teste", senha: "123" },
      { id: 2, nome: "Monteiro", email: "monteiro@teste", senha: "456" },
      { id: 3, nome: "Rossoni", email: "rossoni@teste", senha: "789" },
    ];
    setColaboradores(colaboradoresList);
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
    console.log("Salvar ...");
    if (colaborador.id == null) {
      // inclussão
      colaborador.id = colaboradores.length + 1;
      setColaboradores([...colaboradores, colaborador]);
    } else {
      // alteração
      setColaboradores(
        colaboradores.map((find) =>
          find.id === colaborador.id ? colaborador : find
        )
      );
    }
    setEditando(false);
  };
  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
  };
  const editar = (id) => {
    setColaborador(
      colaboradores.filter((colaborador) => colaborador.id == id)[0]
    );
    setEditando(true);
  };
  const excluir = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  if (!editando) {
    return (
      <div className="App">
        <ColaboradorList
          colaboradores={colaboradores}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
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
      </div>
    );
  }
}
export default App;
