"use strict";

describe("tv4-mongodb", function() {
    const assert = require("assert");
    const tv4MongoDB = require("../tv4-mongodb.js");

    describe("bson-objectid", function() {
        it("is defined", function() {
            assert.strictEqual(typeof tv4MongoDB["bson-objectid"], "function");
        });

        it("validates positively", function() {
            assert.strictEqual(tv4MongoDB["bson-objectid"]("585d4f15d890997a4fb0d2e8"), null);
        });

        it("validates negatively", function() {
            assert.notStrictEqual(tv4MongoDB["bson-objectid"]("585d4f15d890997a4fb0d2z8"), null);
        });

        it("validates negatively", function() {
            assert.notStrictEqual(tv4MongoDB["bson-objectid"](null), null);
        });

        it("validates negatively", function() {
            assert.notStrictEqual(tv4MongoDB["bson-objectid"](undefined), null);
        });
    });
});