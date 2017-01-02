"use strict";

const assert = require("assert");
const tv4 = require("tv4");

const validator = tv4.freshApi();
validator.addFormat(require("../tv4-mongodb"));

const schema = {
    type: "object",
    required: [ "id" ],
    properties: {
        id: {
            type: "string",
            format: "bson-objectid"
        }
    }
};

// ok
console.log(validator.validateMultiple({ id: "585d4f15d890997a4fb0d2e8" }, schema));

// fail
console.log(validator.validateMultiple({ id: "585d4f15d890997a4fb0d2z8" }, schema));