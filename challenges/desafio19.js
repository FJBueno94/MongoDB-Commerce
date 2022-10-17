db.getCollection("produtos").updateMany(
  {},
  {
    $pull: 
      {
        ingredientes: { $in: ["cebola"] },
      },
  },
);
db.getCollection("produtos").find({}, { nome: 1, ingredientes: 1, _id: 0 });