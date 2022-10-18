db.getCollection("produtos").updateMany({}, { $rename: { descricao: "descricaoSite" } });
db.getCollection("produtos").find({}, { nome: 1, descricaoSite: 1, _id: 0 });