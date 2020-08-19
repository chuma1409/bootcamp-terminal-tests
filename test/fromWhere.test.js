let assert = require("assert");
let fromWhere = require("../fromWhere");


describe("Shows where the number plate is from", function() {
   
    
    
        it("Plate registration CY should return Bellville"  ,function(){ 
            // var plate="CY 124-123"
            // var regNumber="CY 123-456";
            assert.equal(fromWhere("CY 123-456"), "Bellville");
        });
        it("Plate registration CJ should return Paarl  ",function(){ 
            // var regNumber="CJ 123-456";
        
        assert.equal(fromWhere("CJ 123-456"),"Paarl");
    });
    it("Plate registration CA should return Cape Town",function(){ 
        // var regNumber="CA 123-456";
    assert.equal(fromWhere("CA 123-456"),"Cape Town");
    });
 
});