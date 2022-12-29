"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Statuses = require("./status-model").Statuses;

var urlSchema = new Schema({
  lastname: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  child: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  concerning: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
  },
  status: {
    type: Object,
    default: Statuses.disponible,
  },
  assigned: {
    type: Boolean,
    default: false,
  },
  assigned_to: {
    type: Object,
  },
});

var Url = mongoose.model("type", urlSchema);
module.exports = Url;
