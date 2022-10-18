db.getCollection("produtos").find(
  {
    $expr:
      {
        $gt: ["$curtidas", "$vendidos"],
      },
  },
  { 
    nome: 1,
    _id: 0,
  },
);