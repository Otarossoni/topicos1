module.exports = (app) => {
  //colocar aqui todas as rotas para requisições de colaboradores
  const ObjectId = require("mongodb").ObjectId;

  // prepara endpoint para responder uma coleção de colaboradores
  app.get("/colaboradores", (req, res) => {
    //res.send('Retornar Colaboradores');
    db.collection("colaboradores")
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        res.json(results);
      });
  });

  // rota para inserir colaborador - POST
  app.post("/colaboradores", (req, res, next) => {
    db.collection("colaboradores").insertOne(req.body, (err, result) => {
      if (err) throw err;
      res.json({ success: "Incluído com sucesso." });
    });
  });

  // rota para alterar um colaborador
  app.put("/colaboradores", (req, res) => {
    var id = ObjectId(req.body._id);
    var newvalues = {
      $set: {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
      },
    };
    db.collection("colaboradores").updateOne(
      { _id: id },
      newvalues,
      (err, result) => {
        if (err) throw err;
        if (result.modifiedCount < 1)
          return res.json({ aviso: "Nada alterado." });
        res.json({ success: "Alterado com sucesso." });
      }
    );
  });

  // rota para deletar um colaborador
  app.delete("/colaboradores/:id", (req, res) => {
    var id = ObjectId(req.params.id);
    db.collection("colaboradores").deleteOne({ _id: id }, (err, result) => {
      if (err) throw err;
      if (result.deletedCount < 1) return res.json({ aviso: "Nada excluído." });
      res.json({ success: "Excluído com sucesso." });
    });
  });

  // rota para obter colaborador por _id
  app.get("/colaboradores/:id", (req, res) => {
    var id = ObjectId(req.params.id);
    db.collection("colaboradores").findOne({ _id: id }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // rota para obter vários objetos por filtro
  app.get("/colaboradores/filtro/:valor", (req, res) => {
    db.collection("colaboradores")
      .find({
        $or: [
          { nome: { $regex: req.params.valor, $options: "i" } },
          { email: { $regex: req.params.valor, $options: "i" } },
        ],
      })
      .toArray((err, results) => {
        if (err) throw err;
        res.json(results);
      });
  });
};
