
let assert = require("assert")
let findItemsOver = require("../findItemsOver")

    describe("Finds all items with a higher quantity than the given threshold.", function () {
    
    
        it("Should return pears with the quantity of 37 and bananas with the quantity of 27", function () {
            var objItems = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
            var threshold=20;
            assert.deepEqual(findItemsOver(objItems,threshold), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
        });
        it("Should return an empty array", function () {
            var objItems =[{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];
    var threshold=20;
            assert.deepEqual(findItemsOver(objItems,threshold), []);
        });
        it("Should return bananas with the quantity of 23 and apples with the quantity of 40", function () {
           var objItems=[{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]
    var threshold=20;
            assert.deepEqual(findItemsOver(objItems,threshold), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
        });
       
    });