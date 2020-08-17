let assert = require("assert")
let findItemsOver20 = require("../findItemsOver20")


    describe("Finds items with a quantity greater than 20.", function () {
    
    
        it("Should return pears with the quantity of 37 and bananas with the quantity of 27", function () {
            var objItems = [{ "name": "apples", "qty": 10 }, { "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }];
            assert.deepEqual(findItemsOver20(objItems), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
        });
        it("Should return an empty list", function () {
            var objItems =[{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];
            assert.deepEqual(findItemsOver20(objItems), []);
        });
        it("Should return bananas with the quantity of 23 and apples with the quantity of 40", function () {
            var objItems =[{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}];
            assert.deepEqual(findItemsOver20(objItems), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
        });
       
    });