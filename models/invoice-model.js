const mongoose = require("../db/connection");

const InvoiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  nameTo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
