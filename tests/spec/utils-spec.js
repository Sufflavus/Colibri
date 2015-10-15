describe("utils", function() {
	it("is a property of 'Colibri'", function() {				
		var actual = Colibri.utils instanceof Object;
		expect(actual).toBe(true);
    });	
		
	it("has function createGuid", function() {		
		var actual = Colibri.utils.createGuid instanceof Function;
		expect(actual).toBe(true);
    });

    it("has function getRandomInt", function() {		
		var actual = Colibri.utils.getRandomInt instanceof Function;
		expect(actual).toBe(true);
    });	
});

describe("utils.createGuid", function() {
	it("returns correct Guid", function() {				
		var actual = Colibri.utils.createGuid();

		var resultParts = actual.split('-');
		expect(actual.length).toEqual(36);
		expect(resultParts.length).toEqual(5);
		expect(resultParts[0].length).toEqual(8);
		expect(resultParts[1].length).toEqual(4);
		expect(resultParts[2].length).toEqual(4);
		expect(resultParts[3].length).toEqual(4);
		expect(resultParts[4].length).toEqual(12);
    });		

    it("returns new Guids each time", function() {				
		var guid1 = Colibri.utils.createGuid();
		var guid2 = Colibri.utils.createGuid();
		
		expect(guid1).not.toEqual(guid2);		
    });		
});

describe("utils.getRandomInt", function() {
	it("returns positive int when called without parameters", function() {				
		var actual = Colibri.utils.getRandomInt();
		
		expect(Number.isInteger(actual)).toBe(true);
		expect(actual).not.toBeLessThan(0);				
    });		

    it("returns int that more than parameter when called with one parameter", function() {	
    	var min = 5;			
		var actual = Colibri.utils.getRandomInt(min);
		
		expect(Number.isInteger(actual)).toBe(true);			
		expect(actual).not.toBeLessThan(min);
    });	

    it("returns correct int when called with negative parameter", function() {	
    	var min = -15;
    	var max = -5;			

		var actual = Colibri.utils.getRandomInt(min, max);
		
		expect(Number.isInteger(actual)).toBe(true);	
		expect(actual).not.toBeLessThan(min);
		expect(actual).not.toBeGreaterThan(max);		
    });		

    it("returns correct int when called with 2 parameter", function() {	
    	var min = -15;
    	var max = 5;			

		var actual = Colibri.utils.getRandomInt(min, max);
		
		expect(Number.isInteger(actual)).toBe(true);	
		expect(actual).not.toBeLessThan(min);
		expect(actual).not.toBeGreaterThan(max);		
    });	

    it("throws an exception when the first parameter more then the second one", function() {	
    	var min = 15;
    	var max = -5;			
    	
    	expect(function() {
    		Colibri.utils.getRandomInt(min, max);
    	}).toThrowError("First parameter should be less then the second one.");    			
    });	

    it("throws an exception the first parameter is not int", function() {	
    	var min = "1";    	
    	
    	expect(function() {
    		Colibri.utils.getRandomInt(min);
    	}).toThrowError("If the first parameter specified it should be int.");    			
    });	

    it("throws an exception the second parameter is not int", function() {	
    	var min = 1;    	
    	var max = new Date();    	
    	
    	expect(function() {
    		Colibri.utils.getRandomInt(min, max);
    	}).toThrowError("If the second parameter specified it should be int.");    			
    });	
});