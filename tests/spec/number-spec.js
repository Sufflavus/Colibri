describe("Number 'isInteger'", function() {
	it("is a function of 'Number'", function() {				
		var actual = Number.isInteger instanceof Function;
		expect(actual).toBe(true);
    });	

    it("returns true for integer", function() {		
    	var value = 5;		    	
		var actual = Number.isInteger(value);	
		expect(actual).toBe(true);		
    });	

    it("returns true for 0", function() {				
		var value = 0;		    	
		var actual = Number.isInteger(value);	
		expect(actual).toBe(true);		
    });	

    it("returns true for negative integer", function() {	
    	var value = -100000;		    	
		var actual = Number.isInteger(value);						
		expect(actual).toBe(true);		
    });	

    it("returns false for string", function() {		
    	var value = "5";		    	
		var actual = Number.isInteger(value);				
		expect(actual).toBe(false);		
    });	
		
	it("returns false for float", function() {		
		var value = 0.1;		    	
		var actual = Number.isInteger(value);			
		expect(actual).toBe(false);		
    });	
    
    it("returns false for Math.PI", function() {		
		var value = Math.PI;		    	
		var actual = Number.isInteger(value);						
		expect(actual).toBe(false);		
    });	

    it("returns false for NaN", function() {		
		var value = NaN;		    	
		var actual = Number.isInteger(value);				
		expect(actual).toBe(false);		
    });	

    it("returns false for null", function() {		
		var value = null;		    	
		var actual = Number.isInteger(value);				
		expect(actual).toBe(false);		
    });

    it("returns false for undefined", function() {		
		var value = undefined;		    	
		var actual = Number.isInteger(value);				
		expect(actual).toBe(false);		
    });
});

describe("Number 'isFloat'", function() {
	it("is a function of 'Number'", function() {				
		var actual = Number.isFloat instanceof Function;
		expect(actual).toBe(true);
    });	

    it("returns true for float", function() {		
		var value = 0.1;		    	
		var actual = Number.isFloat(value);			
		expect(actual).toBe(true);		
    });	

    it("returns true for Math.PI", function() {		
		var value = Math.PI;		    	
		var actual = Number.isFloat(value);						
		expect(actual).toBe(true);		
    });	

    it("returns true for integer", function() {		
    	var value = 5;		    	
		var actual = Number.isFloat(value);	
		expect(actual).toBe(true);		
    });	

    it("returns true for 0", function() {				
		var value = 0;		    	
		var actual = Number.isFloat(value);	
		expect(actual).toBe(true);		
    });	

    it("returns true for negative float", function() {	
    	var value = -100000.345;		    	
		var actual = Number.isFloat(value);						
		expect(actual).toBe(true);		
    });	

    it("returns true for negative integer", function() {	
    	var value = -100000;		    	
		var actual = Number.isFloat(value);						
		expect(actual).toBe(true);		
    });	    

    it("returns false for string", function() {		
    	var value = "5";		    	
		var actual = Number.isFloat(value);				
		expect(actual).toBe(false);		
    });	      

    it("returns false for NaN", function() {		
		var value = NaN;		    	
		var actual = Number.isFloat(value);				
		expect(actual).toBe(false);		
    });	

    it("returns false for null", function() {		
		var value = null;		    	
		var actual = Number.isFloat(value);				
		expect(actual).toBe(false);		
    });

    it("returns false for undefined", function() {		
		var value = undefined;		    	
		var actual = Number.isFloat(value);				
		expect(actual).toBe(false);		
    });
});
