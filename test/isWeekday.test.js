let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(true, isWeekday("Monday"));
    });
  
    it ("should say that Friday is a weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(true,isWeekday("F"));
    });
    
    it ("should say that Sunday is not weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(false, isWeekday("S"));
    });
  
    it ("should say that Saturday is not weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(false, isWeekday("S"));
    });
    
  
    
});