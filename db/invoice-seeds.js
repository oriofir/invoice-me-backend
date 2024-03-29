const Invoice = require("../models/invoice-model.js");

const seedData = require("./invoice-seeds.json");

Invoice.deleteMany({})
  .then(() => {
    return Invoice.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
