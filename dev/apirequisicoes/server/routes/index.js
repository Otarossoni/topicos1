const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require("cors");
routes.use(cors({ origin: "*" }));
//routes.use(cors({origin: 'http://localhost:3001'}));

//rotas para cada módulo
const colaboradorRout = require("./ColaboradorRout.js");
routes.use("/api", colaboradorRout);

const solicitanteRout = require("./SolicitanteRout.js");
routes.use("/api", solicitanteRout);

const tipoRequisicaoRout = require("./TipoRequisicaoRout.js");
routes.use("/api", tipoRequisicaoRout);

const requisicaoRout = require("./RequisicaoRout.js");
routes.use("/api", requisicaoRout);

const atividadeRout = require("./AtividadeRout.js");
routes.use("/api", atividadeRout);

const andamentoRout = require("./AndamentoRout.js");
routes.use("/api", andamentoRout);

module.exports = routes;
