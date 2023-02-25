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
  nameFrom: {
    type: String,
    required: true,
  },
  emailFrom: {
    type: String,
    required: true,
  },
  addressFrom: {
    type: String,
    required: true,
  },
  phoneNumberFrom: {
    type: Number,
    required: false,
  },
  nameTo: {
    type: String,
    required: true,
  },
  emailTo: {
    type: String,
    required: true,
  },
  addressTo: {
    type: String,
    required: true,
  },
  phoneNumberTo: {
    type: Number,
    required: false,
  },

  terms: {
    type: String,
    required: false,
  },
});
