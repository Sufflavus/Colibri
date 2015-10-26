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

    it("has function arrayFirst", function() {		
		var actual = Colibri.utils.arrayFirst instanceof Function;
		expect(actual).toBe(true);
    });	

    it("has function arrayRemoveItem", function() {		
		var actual = Colibri.utils.arrayRemoveItem instanceof Function;
		expect(actual).toBe(true);
    });	

    it("has function dictionaryForEach", function() {     
        var actual = Colibri.utils.dictionaryForEach instanceof Function;
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

    it("returns new Guid each time", function() {				
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

    it("returns int that greater than parameter when called with one parameter", function() {	
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

    it("returns correct int when called with 2 equal parameter", function() {	
    	var min = 5;
    	var max = 5;			

		var actual = Colibri.utils.getRandomInt(min, max);
		
		expect(Number.isInteger(actual)).toBe(true);		
		expect(actual).toEqual(min);				
    });	

    it("throws an exception when the first parameter greater then the second one", function() {	
    	var min = 15;
    	var max = -5;			
    	
    	expect(function() {
    		Colibri.utils.getRandomInt(min, max);
    	}).toThrowError("First parameter should be less or equal then the second one.");    			
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

describe("utils.arrayFirst", function() {
	it("returns correct result 1", function() {	
		var  array = [1, 3, 8];			
		var actual = Colibri.utils.arrayFirst(array, function (item){
			return item > 2;
		});
				
		expect(actual).toEqual(3);				
    });	

    it("returns correct result 2", function() {	
		var  array = ["lorem", "impus", 8];			
		var actual = Colibri.utils.arrayFirst(array, function (item){
			return item === "impus";
		});
				
		expect(actual).toEqual("impus");				
    });		

    it("returns null for empty array", function() {	
    	var  array = [];			
		var actual = Colibri.utils.arrayFirst(array, function (item){
			return item === 1;
		});
				
		expect(actual).toEqual(null);		
    });	

    it("returns null if search item does not exist", function() {	
    	var  array = [2, 8];			
		var actual = Colibri.utils.arrayFirst(array, function (item){
			return item === 1;
		});
				
		expect(actual).toEqual(null);		
    });	

    it("throws an exception when the first parameter is string", function() {	
    	var array = "array";    				
    	
    	expect(function() {
	    	Colibri.utils.arrayFirst(array, function (){
				return true;
			});
    	}).toThrowError("First parameter should be array.");    			
    });	

    it("throws an exception when the first parameter is int", function() {	
    	var array = 2;    				
    	
    	expect(function() {
	    	Colibri.utils.arrayFirst(array, function (){
				return true;
			});
    	}).toThrowError("First parameter should be array.");    			
    });		

    it("throws an exception when the first parameter is null", function() {	
    	var array = null;    				
    	
    	expect(function() {
	    	Colibri.utils.arrayFirst(array, function (){
				return true;
			});
    	}).toThrowError("First parameter should be array.");    			
    });		

    it("throws an exception the second parameter is string", function() {	
    	var array = [];    				
    	
    	expect(function() {
	    	Colibri.utils.arrayFirst(array, "");
    	}).toThrowError("Second parameter should be a function.");     			
    });	

    it("throws an exception the second parameter is int", function() {	
    	var array = [];    				
    	
    	expect(function() {
	    	Colibri.utils.arrayFirst(array, 1);
    	}).toThrowError("Second parameter should be a function.");     			
    });	

    it("throws an exception the second parameter is not defined", function() {	
    	var array = [];    				
    	
    	expect(function() {
	    	Colibri.utils.arrayFirst(array);
    	}).toThrowError("Second parameter should be a function.");     			
    });	
});

describe("utils.arrayRemoveItem", function() {
	it("returns correct result 1", function() {			
		var array = [1, 3, 8];	
		var arrayLength = array.length;		
		var itemToRemove = array[arrayLength - 2];

		Colibri.utils.arrayRemoveItem(array, itemToRemove);
				
		expect(array.length).toEqual(arrayLength - 1);		
		expect(array.indexOf(itemToRemove)).toEqual(-1);	
    });	

    it("returns correct result 2", function() {	
		var array = [{a: "Lorem"}, 3, {b: 5}];	
		var arrayLength = array.length;		
		var itemToRemove = array[arrayLength - 1];

		Colibri.utils.arrayRemoveItem(array, itemToRemove);
				
		expect(array.length).toEqual(arrayLength - 1);		
		expect(array.indexOf(itemToRemove)).toEqual(-1);					
    });		

    it("returns correct result 3", function() {	
		var array = [{a: "Lorem"}, null, {b: 5}];	
		var arrayLength = array.length;		
		var itemToRemove = null;

		Colibri.utils.arrayRemoveItem(array, itemToRemove);
				
		expect(array.length).toEqual(arrayLength - 1);		
		expect(array.indexOf(itemToRemove)).toEqual(-1);				
    });	

    it("returns empty array for empty array", function() {	
    	var  array = [];	

		Colibri.utils.arrayRemoveItem(array, 1);
				
		expect(array.length).toEqual(0);		
    });	

    it("returns the same array if search item does not exist", function() {	
    	var  array = [2, 8];	
    	var itemToRemove = 1;

		Colibri.utils.arrayRemoveItem(array, itemToRemove);
				
		expect(array.length).toEqual(2);		
		expect(array[0]).toEqual(2);		
		expect(array[1]).toEqual(8);		
    });	

    it("throws an exception when the first parameter is string", function() {	
    	var array = "array";    				
    	
    	expect(function() {
	    	Colibri.utils.arrayRemoveItem(array);
    	}).toThrowError("First parameter should be array.");    			
    });	

    it("throws an exception when the first parameter is int", function() {	
    	var array = 2;    				
    	
    	expect(function() {
	    	Colibri.utils.arrayRemoveItem(array);
    	}).toThrowError("First parameter should be array.");    			
    });		

    it("throws an exception when the first parameter is null", function() {	
    	var array = null;    				
    	
    	expect(function() {
	    	Colibri.utils.arrayRemoveItem(array);
    	}).toThrowError("First parameter should be array.");    			
    });	    
});

describe("utils.dictionaryForEach", function() {
    it("executes a provided function once per dictionary element 1", function() {         
        var dictionary = { a: 1, b: 2 };
        var dictionaryItemsCount = 2;
        var counter = 0;
        var keys = [];
        var values = [];

        var callback = function(key, value){
            counter++;
            keys.push(key);
            values.push(value);
        }

        Colibri.utils.dictionaryForEach(dictionary, callback);
                
        expect(counter).toEqual(dictionaryItemsCount);      
        expect(keys.length).toEqual(dictionaryItemsCount);    
        expect(values.length).toEqual(dictionaryItemsCount); 
        expect(keys[0]).toEqual("a");  
        expect(keys[1]).toEqual("b");  
    }); 

    it("executes a provided function once per dictionary element 1", function() {         
        var dictionary = { };
        var dictionaryItemsCount = 0;
        var counter = 0;
        var keys = [];
        var values = [];

        var callback = function(key, value){
            counter++;
            keys.push(key);
            values.push(value);
        }

        Colibri.utils.dictionaryForEach(dictionary, callback);
                
        expect(counter).toEqual(dictionaryItemsCount);      
        expect(keys.length).toEqual(dictionaryItemsCount);    
        expect(values.length).toEqual(dictionaryItemsCount);         
    }); 

    it("throws an exception when the first parameter is null", function() {                           
        expect(function() {
            Colibri.utils.dictionaryForEach(null, function(){});
        }).toThrowError("First parameter should be defined.");                
    }); 

    it("throws an exception when the first parameter is undefined", function() {  
        expect(function() {
            Colibri.utils.dictionaryForEach(undefined, function(){});
        }).toThrowError("First parameter should be defined.");                  
    });     

    it("throws an exception when the second parameter is null", function() { 
        expect(function() {
            Colibri.utils.dictionaryForEach({}, null);
        }).toThrowError("Second parameter should be a function.");                     
    });     

    it("throws an exception when the second parameter is undefined", function() { 
        expect(function() {
            Colibri.utils.dictionaryForEach({}, undefined);
        }).toThrowError("Second parameter should be a function.");                     
    });    

    it("throws an exception when the second parameter is int", function() { 
        expect(function() {
            Colibri.utils.dictionaryForEach({}, 1);
        }).toThrowError("Second parameter should be a function.");                     
    });   

    it("throws an exception when the second parameter is string", function() { 
        expect(function() {
            Colibri.utils.dictionaryForEach({}, "a");
        }).toThrowError("Second parameter should be a function.");                     
    });   

    it("throws an exception when the second parameter is array", function() { 
        expect(function() {
            Colibri.utils.dictionaryForEach({}, [1, 2]);
        }).toThrowError("Second parameter should be a function.");                     
    });   
});