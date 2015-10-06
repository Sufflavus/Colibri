describe("Array 'last'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.last instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].last instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns the last element from array with more than one element", function() {
		var lastElement = 3;
		var array = [1, 2, lastElement];
		
		var actual = array.last();
		
        expect(actual).toEqual(lastElement);
    });
	
	it("returns the last element from array with only one element", function() {
		var lastElement = 3;
		var array = [lastElement];
		
		var actual = array.last();
		
        expect(actual).toEqual(lastElement);
    });
	
	it("returns undefined from empty array", function() {		
		var array = [];
		
		var actual = array.last();
		
		expect(actual).toBeUndefined();        
    });	
});

describe("Array 'first'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.first instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].first instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns the first element from array with more than one element", function() {
		var firstElement = '12';
		var array = [firstElement, 2, 3];
		
		var actual = array.first();
		
        expect(actual).toEqual(firstElement);
    });
	
	it("returns the first element from array with only one element", function() {
		var firstElement = 3;
		var array = [firstElement];
		
		var actual = array.first();
		
        expect(actual).toEqual(firstElement);
    });
	
	it("returns undefined from empty array", function() {		
		var array = [];
		
		var actual = array.first();
		
		expect(actual).toBeUndefined();        
    });	
});

describe("Array 'isEmpty'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.isEmpty instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].isEmpty instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns false for array with more than one element", function() {		
		var array = ['er', 2, 3];
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);
    });
	
	it("returns false for array with only one element", function() {
		var array = ['f'];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);
    });
	
	it("returns true for empty array", function() {		
		var array = [];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(true);       
    });	
});