let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function ", function(){
  
    it ("should return R20 for morning shift", function() {
        // todo fix this assert to call isWeekday correctly.
       var shift="morning";
        assert.equal(transportFee(shift), "R20");
    }); 
     it ("should return R10 for afternoon shift", function() {
        // todo fix this assert to call isWeekday correctly.
      var shift="afternoon";
        assert.equal(transportFee(shift), "R10");
    });
  it ("should return free for something else", function() {
        // todo fix this assert to call isWeekday correctly.
      var shift="night";
        assert.equal(transportFee(shift), "free");
    });
});