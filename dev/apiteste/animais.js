module.exports = (app) => {
  //colocar aqui todas as rotas para requisições de animais
  const ObjectId = require("mongodb").ObjectId;

  // prepara endpoint para responder uma coleção de animais
  app.get("/animais", (req, res) => {
    //res.send('retornar animais');
    db.collection("animais")
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        res.json(results);
      });
  });

  // rota para inserir animais - POST
  app.post("/animais", (req, res, next) => {
    db.collection("animais").insertOne(req.body, (err, result) => {
      if (err) throw err;
      res.json({ success: "Incluído com sucesso." });
    });
  });

  // rota para alterar um animal
  app.put("/animais", (req, res) => {
    var id = ObjectId(req.body._id);
    var newvalues = {
      $set: {
        nome: req.body.nome,
        tipo: req.body.tipo,
        idade: req.body.idade,
      },
    };
    db.collection("animais").updateOne(
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

  // rota para deletar um animal
  app.delete("/animais/:id", (req, res) => {
    var id = ObjectId(req.params.id);
    db.collection("animais").deleteOne({ _id: id }, (err, result) => {
      if (err) throw err;
      if (result.deletedCount < 1) return res.json({ aviso: "Nada excluído." });
      res.json({ success: "Excluído com sucesso." });
    });
  });

  // rota para obter animal por _id
  app.get("/animais/:id", (req, res) => {
    var id = ObjectId(req.params.id);
    db.collection("animais").findOne({ _id: id }, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // rota para obter vários objetos por filtro
  app.get("/animais/filtro/:valor", (req, res) => {
    db.collection("animais")
      .find({
        $or: [
          { nome: { $regex: req.params.valor, $options: "i" } },
          { tipo: { $regex: req.params.valor, $options: "i" } },
        ],
      })
      .toArray((err, results) => {
        if (err) throw err;
        res.json(results);
      });
  });
};
