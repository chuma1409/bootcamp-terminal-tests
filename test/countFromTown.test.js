let assert = require("assert");
let countFromTown = require("../countFromTown");


describe("Count all number plates matching the location given.", function() {
    
    
        it("Should count 1 number plate that matches CF",function(){ 
            var string="CJ 124,CY 567,CL 345, CF 456, CL 341"
    var loc="CF"
            
            assert.deepEqual(countFromTown(string,loc), 1);
        });
        it("Should count 3 number plates that match CL",function(){ 
            var string="CL 124,CY 567,CL 345, CJ 456,CL 341";
            var loc="CL";
        assert.deepEqual(countFromTown(string,loc),3);
    });
    it("Should count 2 number plates that match CK",function(){ 
        var string="CK 124,CK 567,CL 345, CJ 456,CL 341";
        var loc="CK";
    assert.deepEqual(countFromTown(string,loc),2);
    });
    });