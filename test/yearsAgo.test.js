let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("isWeekday", function(item) {


    it("The amount of years is 44",function(){ 
       var year=1956;
        assert.equal(yearsAgo(year),64);

    });

});