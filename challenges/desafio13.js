db.getCollection("produtos").updateMany(
  {},
  {
    $set: 
      {
        criadoPor: "Ronald McDonald",
      },
  },
);
db.getCollection("produtos").find({}, { nome: 1, criadoPor: 1, _id: 0 });