# tv4-mongodb

## About

Helper module for [tv4](https://github.com/geraintluff/tv4) to validate against [MongoDB ObjectId](https://docs.mongodb.com/manual/reference/bson-types/#objectid).

## Install

    $ npm install --save tv4 tv4-mongodb

## Usage

```javascript
const assert = require("assert");
const tv4 = require("tv4");

const validator = tv4.freshApi();
validator.addFormat(require("tv4-mongodb"));

const schema = { type: "string", format: "bson-objectid" };

assert(validator.validate("585d4f15d890997a4fb0d2e8", schema)); // Valid ObjectId
assert(!validator.validate("585d4f15d890997a4fb0d2z8", schema)); // Invalid ObjectId
```