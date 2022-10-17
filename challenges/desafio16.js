db.getCollection("produtos").updateOne(
  { nome: "Big Mac" },
{
$currentDate: 
  {
    ultimaModificacao: true,
  },
},
);
db.getCollection("produtos").find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });