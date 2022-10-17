db.getCollection("produtos").deleteMany({ curtidas: { $lt: 50 } });
db.getCollection("produtos").find({}, { nome: 1, _id: 0 });
