const Colaborador = require("../model/ColaboradorSchema");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    Colaborador.findOne({ email: req.body.email }, async function (err, obj) {
      if (err) return res.status(400).send(err);
      if (!obj) return res.status(400).send("Email ou Senha inválido(a)!");
      const senhaValidada = await bcrypt.compare(req.body.senha, obj.senha);
      if (!senhaValidada)
        return res.status(400).send("Email ou Senha inválido(a)!");
      const token = obj.generateAuthToken();
      res.send(token);
    });
  },

  logout: async (req, res) => {
    res.status(200).send({ auth: false, token: null });
  },
};
