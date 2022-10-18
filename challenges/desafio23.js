db.getCollection("produtos").updateMany(
  {},
  {
    $push: 
      {
        tags: 
          {
            $each: ["combo", "tasty"],
            $sort: 1,
          },
      },
  },
);
db.getCollection("produtos").find({}, { nome: 1, tags: 1, _id: 0 });