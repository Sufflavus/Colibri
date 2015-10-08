describe("Object 'isArray'", function() {
	it("is a function of 'Object' prototype", function() {				
		var actual = Object.prototype.isArray instanceof Function;
		expect(actual).toBe(true);
    });	
		
	it("returns true for array", function() {		
		var testedArray = [1, 2];
		var actual = testedArray.isArray();
		
		expect(actual).toBe(true);
    });
		
    it("returns false for string", function() {		
		var actual = "test".isArray();
		
		expect(actual).toBe(false);
    });
	
	it("returns false for function", function() {	
		var testedFunction = function(){};
		var actual = testedFunction.isArray();
		
		expect(actual).toBe(false);
    });	
});
