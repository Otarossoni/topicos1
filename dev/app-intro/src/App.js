import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UsuarioList from "./UsuarioList";

function App() {
  let usuarioList = [
    { id: 1, nome: "Fulano", email: "email1@teste", celular: "54 6565 5454" },
    { id: 2, nome: "Beltrano", email: "email2@teste", celular: "54 6565 5454" },
  ];

  const onClickAtualizar = () => {
    usuarioList = [
      {
        id: 1,
        nome: "fulano alterado",
        email: "fulano@teste",
        celular: "54 6565 5454",
      },
      {
        id: 2,
        nome: "beltrano",
        email: "beltrano@teste",
        celular: "54 6565 5455",
      },
      {
        id: 3,
        nome: "ciclano",
        email: "ciclano@teste",
        celular: "54 6565 5456",
      },
    ];
    setUsuario(usuarioList);
  };

  const editar = (id) => {
    setUsuario(usuario.filter((usuario) => usuario.id !== id)[0]);
  };
  const excluir = (id) => {
    setUsuario(usuario.filter((usuario) => usuario.id !== id));
  };

  const [usuario, setUsuario] = useState(usuarioList);

  return (
    <div className="App">
      <UsuarioList
        usuario={usuario}
        onClickAtualizar={onClickAtualizar}
        excluir={excluir}
        editar={editar}
      />
    </div>
  );
}
export default App;
