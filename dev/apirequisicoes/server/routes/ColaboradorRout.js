const express = require("express");
const routes = express.Router();
const controle = require("../controller/ColaboradorCont");

routes.route("/colaboradores").get(controle.listar);

module.exports = routes;
