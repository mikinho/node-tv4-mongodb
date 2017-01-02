"use strict";

const bson = require("bson");

exports["bson-objectid"] = function(value) {
    return bson.ObjectID.isValid(value) ? null : "Invalid MongoDB ObjectId";
};