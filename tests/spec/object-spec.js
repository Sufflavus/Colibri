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

    it("returns false for int", function() {
    	var testedValue = 12;		
		var actual = testedValue.isArray();		
		expect(actual).toBe(false);
    });

    it("returns false for float", function() {
    	var testedValue = 12.56;		
		var actual = testedValue.isArray();		
		expect(actual).toBe(false);
    });

    it("returns false for object", function() {
    	var testedValue = {a: 1};		
		var actual = testedValue.isArray();		
		expect(actual).toBe(false);
    });

    it("returns false for Date", function() {
    	var testedValue = new Date();		
		var actual = testedValue.isArray();		
		expect(actual).toBe(false);
    });
	
	it("returns false for function", function() {	
		var testedFunction = function(){};
		var actual = testedFunction.isArray();		
		expect(actual).toBe(false);
    });	
});

describe("Object 'isString'", function() {
	it("is a function of 'Object' prototype", function() {				
		var actual = Object.prototype.isString instanceof Function;
		expect(actual).toBe(true);
    });	
		
	it("returns true for non-empty string", function() {		
		var testedValue = "Lorem Ipsum";
		var actual = testedValue.isString();		
		expect(actual).toBe(true);
    });

    it("returns true for empty string", function() {		
		var testedValue = "";
		var actual = testedValue.isString();		
		expect(actual).toBe(true);
    });
		
    it("returns false for int", function() {
    	var testedValue = 12;		
		var actual = testedValue.isString();		
		expect(actual).toBe(false);
    });

    it("returns false for float", function() {
    	var testedValue = 12.56;		
		var actual = testedValue.isString();		
		expect(actual).toBe(false);
    });

    it("returns false for array", function() {
    	var testedValue = [1, 2];		
		var actual = testedValue.isString();		
		expect(actual).toBe(false);
    });

    it("returns false for object", function() {
    	var testedValue = {a: 1};		
		var actual = testedValue.isString();		
		expect(actual).toBe(false);
    });

    it("returns false for Date", function() {
    	var testedValue = new Date();		
		var actual = testedValue.isString();		
		expect(actual).toBe(false);
    });
	
	it("returns false for function", function() {	
		var testedFunction = function(){};
		var actual = testedFunction.isString();		
		expect(actual).toBe(false);
    });		
});

describe("Object 'clone'", function() {
	it("is a function of 'Object' clone", function() {				
		var actual = Object.prototype.clone instanceof Function;
		expect(actual).toBe(true);
    });	
		
	it("returns correct result for empty object", function() {		
		var testedObject = {};

		var actual = testedObject.clone();	

		var numberOfProperties = Object.getOwnPropertyNames(actual).length;
		expect(numberOfProperties).toEqual(0);
    });

    it("returns correct result for one-level object", function() {		
		var testedObject = { a: 1, b: "lorem", "t": 5};
		var testedObjectProperties = Object.getOwnPropertyNames(testedObject);

		var actual = testedObject.clone();	

		var actualObjectProperties = Object.getOwnPropertyNames(actual);
		expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

		testedObjectProperties.forEach(function(prop){
			expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
			expect(actual[prop]).toEqual(testedObject[prop]);
		});		
    });

    it("returns correct result for one-level object with function", function() {		
		var testedObject = { a: 1, b: "lorem", "t": 5, foo: function(){}};
		var testedObjectProperties = Object.getOwnPropertyNames(testedObject).filter(function(prop){ return prop!="foo"; });

		var actual = testedObject.clone();	
		
		var actualObjectProperties = Object.getOwnPropertyNames(actual);
		expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

		testedObjectProperties.forEach(function(prop){
			expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
			expect(actual[prop]).toEqual(testedObject[prop]);
		});		

		expect(!actual.foo).toBe(true);
    });

    it("returns correct result for one-level object with array", function() {		
		var testedObject = { a: 1, b: "lorem", "t": 5, array: [1, 2]};
		var testedObjectProperties = Object.getOwnPropertyNames(testedObject);

		var actual = testedObject.clone();	
		
		var actualObjectProperties = Object.getOwnPropertyNames(actual);
		expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

		testedObjectProperties.forEach(function(prop){
			expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
			expect(actual[prop]).toEqual(testedObject[prop]);
		});	
    });

    it("returns correct result for two-level object", function() {
    	var testedInnerObject = { a: { b: 1, "t": 5 } };
	    var testedObject = { a: testedInnerObject, c: "lorem" };			
		var testedObjectProperties = Object.getOwnPropertyNames(testedObject);
		var testedInnerObjectProperties = Object.getOwnPropertyNames(testedInnerObject);

		var actual = testedObject.clone();	

		var actualObjectProperties = Object.getOwnPropertyNames(actual);
		expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

		testedObjectProperties.forEach(function(prop){
			expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
			expect(actual[prop]).toEqual(testedObject[prop]);
		});		

		var actualInnerObjectProperties = Object.getOwnPropertyNames(actual.a);
		expect(actualInnerObjectProperties.length).toEqual(testedInnerObjectProperties.length);

		testedInnerObjectProperties.forEach(function(prop){
			expect(actualInnerObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
			expect(actual.a[prop]).toEqual(testedInnerObject[prop]);
		});		
    });

	it("returns the same string for non-empty string", function() {		
		var testedObject = "lorem";
		var actual = testedObject.clone();	
		expect(actual).toEqual(testedObject);
    });

    it("returns the same string for empty string", function() {		
		var testedObject = "";
		var actual = testedObject.clone();	
		expect(actual).toEqual(testedObject);
    });

    it("returns the same int for int", function() {		
		var testedObject = 1;
		var actual = testedObject.clone();	
		expect(actual).toEqual(testedObject);
    });

    it("returns the same float for float", function() {		
		var testedObject = 1.786;
		var actual = testedObject.clone();	
		expect(actual).toEqual(testedObject);
    });

    it("returns the same array for array", function() {		
		var testedObject = [1, 2, 3];
		var actual = testedObject.clone();	
		expect(actual).toEqual(testedObject);
    });
});