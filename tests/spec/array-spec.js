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

    it("returns false for array with empty elements", function() {		
		var array = [, , ];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);       
    });	

    it("returns false for array with 0", function() {		
		var array = [0];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);       
    });	

    it("returns false for array with empty string", function() {		
		var array = [""];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);       
    });	

    it("returns false for array with empty object", function() {		
		var array = [{}];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);       
    });	

    it("returns false for array with empty array", function() {		
		var array = [[]];
		
		var actual = array.isEmpty();
		
		expect(actual).toBe(false);       
    });	
});

describe("Array 'isNotEmpty'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.isNotEmpty instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].isNotEmpty instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns true for array with more than one element", function() {		
		var array = ['er', 2, 3];
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);
    });
	
	it("returns true for array with only one element", function() {
		var array = ['f'];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);
    });
	
	it("returns false for empty array", function() {		
		var array = [];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(false);       
    });	

    it("returns true for array with empty elements", function() {		
		var array = [, , ];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);       
    });	

    it("returns true for array with 0", function() {		
		var array = [0];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);       
    });	

    it("returns true for array with empty string", function() {		
		var array = [""];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);       
    });	

    it("returns true for array with empty object", function() {		
		var array = [{}];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);       
    });	

    it("returns true for array with empty array", function() {		
		var array = [[]];
		
		var actual = array.isNotEmpty();
		
		expect(actual).toBe(true);       
    });	
});

describe("Array 'removeEmpty'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.removeEmpty instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].removeEmpty instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("removes empty sting elements", function() {		
    	var arrayElement1 = 2;
		var arrayElement2 = "5";	
		var array = [arrayElement1, arrayElement2, ''];
		var countOfNotEmptyElements = 2;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);
		expect(actual[0]).toEqual(arrayElement1);
		expect(actual[1]).toEqual(arrayElement2);
    });	

    it("removes null elements", function() {	
    	var arrayElement1 = 2;
		var arrayElement2 = "5";		
		var array = [arrayElement1, arrayElement2, null];
		var countOfNotEmptyElements = 2;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);
		expect(actual[0]).toEqual(arrayElement1);
		expect(actual[1]).toEqual(arrayElement2);
    });	

    it("removes undefined elements", function() {		
    	var arrayElement1 = 2;
		var arrayElement2 = "5";	
		var array = [arrayElement1, arrayElement2, undefined];
		var countOfNotEmptyElements = 2;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);
		expect(actual[0]).toEqual(arrayElement1);
		expect(actual[1]).toEqual(arrayElement2);
    });	

    it("removes missed elements", function() {
    	var arrayElement1 = 2;
		var arrayElement2 = "5";		
		var array = [arrayElement1, arrayElement2, , ,];
		var countOfNotEmptyElements = 2;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);
		expect(actual[0]).toEqual(arrayElement1);
		expect(actual[1]).toEqual(arrayElement2);
    });	

    it("removes empty elements from different positions", function() {		
    	var arrayElement1 = 2;
		var arrayElement2 = "5";
		var arrayElement3 = {a:1};
		var array = [null, arrayElement1, ,arrayElement2, undefined, ,arrayElement3 ,];
		var countOfNotEmptyElements = 3;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);		
		expect(actual[0]).toEqual(arrayElement1);
		expect(actual[1]).toEqual(arrayElement2);
		expect(actual[2]).toEqual(arrayElement3);
    });	

    it("does not remove empty object element", function() {		
    	var arrayElement1 = {};		
		var array = [arrayElement1];
		var countOfNotEmptyElements = 1;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);		
		expect(actual[0]).toEqual(arrayElement1);		
    });	    

    it("does not remove 0", function() {		
    	var arrayElement1 = 0;		
		var array = [arrayElement1];
		var countOfNotEmptyElements = 1;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);		
		expect(actual[0]).toEqual(arrayElement1);		
    });	   

    it("does not remove empty array", function() {		
    	var arrayElement1 = [];		
		var array = [arrayElement1];
		var countOfNotEmptyElements = 1;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);		
		expect(actual[0]).toEqual(arrayElement1);		
    });	 

    it("works correct on empty arrays", function() {	    	
		var array = [];
		var countOfNotEmptyElements = 0;

		var actual = array.removeEmpty();
		
		expect(actual.length).toEqual(countOfNotEmptyElements);					
    });	
});

describe("Array 'contains'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.contains instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].contains instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns true for existing int element", function() {		
		var array = [2, 0, ''];
		var actual = array.contains(2);
		
		expect(actual).toBe(true);
    });	

    it("returns true for existing empty string element", function() {		
		var array = [2, 0, ''];
		var actual = array.contains('');
		
		expect(actual).toBe(true);
    });	

    it("returns true for existing zero element", function() {		
		var array = [2, 0, ''];
		var actual = array.contains(0);
		
		expect(actual).toBe(true);
    });	

    it("returns false for nonexistent element", function() {		
		var array = [2, 0, ''];
		var actual = array.contains(1);
		
		expect(actual).toBe(false);
    });

    it("returns false for empty array", function() {		
		var array = [];
		var actual = array.contains(1);
		
		expect(actual).toBe(false);
    });

    it("returns false for nonexistent null element", function() {		
		var array = [2, 0];
		var actual = array.contains(null);
		
		expect(actual).toBe(false);
    });

    it("returns true for existing null element", function() {		
		var array = [2, 0, null];
		var actual = array.contains(null);
		
		expect(actual).toBe(true);
    });

    it("returns false for nonexistent undefined element", function() {		
		var array = [2, 0];
		var actual = array.contains(undefined);
		
		expect(actual).toBe(false);
    });

    it("returns true for existing undefined element", function() {		
		var array = [2, 0, undefined];
		var actual = array.contains(undefined);
		
		expect(actual).toBe(true);
    });
});

describe("Array 'indexOfInsensitive'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.indexOfInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].indexOfInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns correct index for existing string element", function() {
    	var element = "LoReM";
		var searchElement = "lorem";
		var array = [1, 2, element, "ert"];
		var indexOfElement = 2;
		
		var actual = array.indexOfInsensitive(searchElement);
		
        expect(actual).toEqual(indexOfElement);
    });	

    it("returns -1 for nonexistent element", function() {
    	var element = "impus";
		var searchElement = "lorem";
		var array = [1, 2, element, "ert"];		
		
		var actual = array.indexOfInsensitive(searchElement);
		
        expect(actual).toEqual(-1);
    });	

    it("returns -1 for empty array", function() {    	
		var searchElement = "lorem";
		var array = [];		
		
		var actual = array.indexOfInsensitive(searchElement);
		
        expect(actual).toEqual(-1);
    });	

    it("returns -1 for nonexistent string element", function() {    	
		var searchElement = "lorem";
		var array = [1, "impus", 2, ];		
		
		var actual = array.indexOfInsensitive(searchElement);
		
        expect(actual).toEqual(-1);
    });	

    it("returns correct index for existing non-string element", function() {
    	var element = 3;
		var searchElement = 3;
		var array = [1, 2, element, "ert"];
		var indexOfElement = 2;
		
		var actual = array.indexOfInsensitive(searchElement);
		
        expect(actual).toEqual(indexOfElement);
    });	

    it("returns -1 for nonexistent non-string element", function() {    	
		var searchElement = 5;
		var array = [1, 2];		
		
		var actual = array.indexOfInsensitive(searchElement);
		
        expect(actual).toEqual(-1);
    });	

    it("throws an exception if fromIndex is not integer", function() {	
    	var searchElement = 5;
		var array = [1, 2];		
		var fromIndex = "a";
    	
    	expect(function() {
    		var actual = array.indexOfInsensitive(searchElement, fromIndex);
    	}).toThrowError("Parameter fromIndex should be numbers.");    			
    });	

    it("returns correct index for correct fromIndex", function() {
    	var element = 3;
    	var array = [1, 2, element, "ert"];		
		var searchElement = 3;
		var indexOfElement = 2;
		var fromIndex = 2;				
		
		var actual = array.indexOfInsensitive(searchElement, fromIndex);
		
        expect(actual).toEqual(indexOfElement);
    });	
});

describe("Array 'max'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.max instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].max instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns correct result for array of numbers", function() {
    	var maxElement = 1000.23;		
		var array = [1, 2, maxElement, 23.56];
				
		var actual = array.max();
		
        expect(actual).toEqual(maxElement);
    });	

    it("returns undefined for empty array", function() {    	
		var array = [];				
		var actual = array.max();		
        expect(actual).toBeUndefined();
    });	

    it("throws an exception for array with non-number elements", function() {	
    	var array = [1, 2, "ert"];		
    	
    	expect(function() {
    		var actual = array.max();	    		
    	}).toThrowError("All items in array should be numbers.");    			
    });	
});

describe("Array 'min'", function() {
	it("is a function of 'Array' prototype", function() {				
		var actual = Array.prototype.min instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of '[]'", function() {				
		var actual = [].min instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns correct result for array of numbers", function() {
    	var minElement = -10;		
		var array = [1, 2, minElement, 23.56];
				
		var actual = array.min();
		
        expect(actual).toEqual(minElement);
    });	

    it("returns undefined for empty array", function() {    	
		var array = [];				
		var actual = array.min();		
        expect(actual).toBeUndefined();
    });	

    it("throws an exception for array with non-number elements", function() {	
    	var array = [1, -2, "3"];		
    	
    	expect(function() {
    		var actual = array.min();		
    	}).toThrowError("All items in array should be numbers.");    			
    });	
});