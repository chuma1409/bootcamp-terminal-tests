let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");



describe("Calculates the total phone bill.", function() {
 
    
    
        it("Should return the total phone bill for a calls ",function(){ 
            
            assert.equal('R'+2.75,totalPhoneBill("calls"));
        });
        it("Should return the Total phone bill for 1 call and 1 SMS",function(){ 
            var callSms="call, sms";
        
        assert.equal(totalPhoneBill(callSms),"R"+3.4.toFixed(2));
    });
 
    });