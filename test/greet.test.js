let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Chuma correctly', function(){
        assert.equal('Hello, Chuma', greet('Chuma'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});