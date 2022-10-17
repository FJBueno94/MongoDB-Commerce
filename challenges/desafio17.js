db.getCollection("resumoProdutos").insertOne(
  {
    franquia: "McDonalds", 
    totalProdutos: db.getCollection("produtos").count(),
  },
);
db.getCollection("resumoProdutos").find({}, { franquia: 1, totalProdutos: 1, _id: 0 });