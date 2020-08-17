let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("The isFromBellville function ", function() {
  

    
    it("should return true for CY 123-223", function() {
      assert.equal(true, isFromBellville("CY 123-223"));
    });
    
    it("should return false for CY 123-223", function() {
      assert.equal(false, isFromBellville("CJ 123-223"));
    });
    

  });