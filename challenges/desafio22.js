db.getCollection("produtos").updateMany(
  {},
  {
    $set: 
      {
        vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
      },
  },
);
db.getCollection("produtos").updateMany(
  { 
    nome: "Big Mac",
  },
  { 
    $inc: 
      { 
        "vendasPorDia.3": 60,
      },
  },
);
db.getCollection("produtos").updateMany(
  { 
    tags: 
      { 
        $elemMatch: 
          {
            $eq: "bovino",
          },
      },
  },
  { 
    $inc: 
      { 
        "vendasPorDia.6": 120,
      },
  },
);
db.getCollection("produtos").find({}, { nome: 1, vendasPorDia: 1, _id: 0 });