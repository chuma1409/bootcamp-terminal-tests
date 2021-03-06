let assert = require("assert");
let regCheck = require("../regCheck");

describe("regCheck", function() {
    
    it("should return true for (GP)", function() {
      // what should the reg number be for this test to pass?
      assert.equal(true, regCheck('DV 23 LP GP', 'GP'));
      
    });

    it("should return false for ND", function() {
         var DURBAN_REG_NUMBER = 'ND 123-124';
        // don't change DURBAN_REG_NUMBER
        // what will this reg number return as at doesn't end on ND
        assert.equal(false, regCheck(DURBAN_REG_NUMBER, 'ND'));
    });
  
});