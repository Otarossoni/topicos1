import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";

const Home = lazy(() => import("./pages/home/Home"));
const ColaboradorCon = lazy(() => import("./pages/colaborador/ColaboradorCon"));
const SolicitanteCon = lazy(() => import("./pages/solicitante/SolicitanteCon"));
const TipoRequisicaoCon = lazy(() =>
  import("./pages/tipoRequisicao/TipoRequisicaoCon")
);
const RequisicaoCon = lazy(() => import("./pages/requisicao/RequisicaoCon"));

function Menu() {
  let navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Cadastros",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "Colaboradores",
          icon: "pi pi-fw pi-user",
          command: () => {
            navigate("/colaboradores");
          },
        },
        {
          label: "Solicitantes",
          icon: "pi pi-fw pi-user-plus",
          command: () => {
            navigate("/solicitantes");
          },
        },
        {
          label: "Tipos de Requisição",
          icon: "pi pi-fw pi-palette",
          command: () => {
            navigate("/tipoRequisicoes");
          },
        },
        {
          label: "Requisição",
          icon: "pi pi-fw pi-ticket",
          command: () => {
            navigate("/requisicoes");
          },
        },
      ],
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  return <Menubar model={items} />;
}

sessionStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNhNzMzMjA1YTQyODZhYjMxYzc4NmMiLCJub21lIjoiT3TDoXZpbyBDb2xhYm9yYWRvciBDcmlwdG9ncmFmYWRvIiwiaWF0IjoxNjU0NjUwNDMzLCJleHAiOjE2NTQ2NTQwMzN9.G7-GSp155TQ1P3Yowa7uaYufQOjm8L2g778GhK6PI0U"
);

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando... </div>}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/colaboradores" element={<ColaboradorCon />} />
          <Route path="/solicitantes" element={<SolicitanteCon />} />
          <Route path="/tipoRequisicoes" element={<TipoRequisicaoCon />} />
          <Route path="/requisicoes" element={<RequisicaoCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
