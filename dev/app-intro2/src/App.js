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
const AtividadeCon = lazy(() => import("./pages/atividade/AtividadeCon"));
const AndamentoCon = lazy(() => import("./pages/andamento/AndamentoCon"));

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
        {
          label: "Atividade",
          icon: "pi pi-fw pi-inbox",
          command: () => {
            navigate("/atividades");
          },
        },
        {
          label: "Andamento",
          icon: "pi pi-fw pi-book",
          command: () => {
            navigate("/andamentos");
          },
        },
      ],
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        <script type="text/javascript">
          {(window.location = "https://www.google.com.br/")}
        </script>;
      },
    },
  ];

  return <Menubar model={items} />;
}

sessionStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNhNzMzMjA1YTQyODZhYjMxYzc4NmMiLCJub21lIjoiT3TDoXZpbyBDb2xhYm9yYWRvciBDcmlwdG9ncmFmYWRvIiwiaWF0IjoxNjU1MDg0NzE1LCJleHAiOjE2NTUwODgzMTV9.FR6Wj4MIIaHbT1_Md30KtNONS4WMdXYRIYWOUAWQh0E"
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
          <Route path="/atividades" element={<AtividadeCon />} />
          <Route path="/andamentos" element={<AndamentoCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
