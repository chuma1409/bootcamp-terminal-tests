let assert = require("assert");
const countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function ", function() {
  
    // don't change code above this line
    
    it("should return 1 for 'CJ 123-223'", function() {
      
      // change anything in here to make the test pass
      assert.equal(1, countAllPaarl("CJ 123-223"));
     });
    // it("should return 2 for 'CJ 123-223,CJ 123-654'", function() {
      
    //   // change anything in here to make the test pass
    //   assert.equal(2, countAllPaarl("CJ 123-223,CJ 123-654"));
    // });
    it("should return 2 ", function() {
      var EXPECTED_COUNT = 2;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(EXPECTED_COUNT , countAllPaarl("CJ 123-456, CJ 123-123"));
    });
    it("should return 7 ", function() {
      var EXPECTED_COUNT = 7;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(EXPECTED_COUNT , countAllPaarl("CJ 123-456, CJ 123-098, CJ 123-456, CJ 123-123, CJ 654-456, CJ 123-133, CJ 123-987"));
    });
    });