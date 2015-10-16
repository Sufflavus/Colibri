describe("Date 'addDays'", function() {
	it("is a function of 'Date' prototype", function() {				
		var actual = Date.prototype.addDays instanceof Function;
		expect(actual).toBe(true);
    });	

    it("returns correct date for positive days count", function() {		
    	var initialDate = new Date();    	
		var daysCount = 3;		

		var actual = initialDate.addDays(daysCount);	
		
		var diffInDays = DateDiffInDays(actual, initialDate);		
		expect(diffInDays).toEqual(daysCount);	
    });	

    it("returns correct date for negative days count", function() {		
    	var initialDate = new Date();    	
		var daysCount = -3;		

		var actual = initialDate.addDays(daysCount);	

		var diffInDays = DateDiffInDays(actual, initialDate);		
		expect(diffInDays).toEqual(daysCount);
    });	

    it("returns correct date for 0 days count", function() {		
    	var initialDate = new Date();    	
		var daysCount = 0;		

		var actual = initialDate.addDays(daysCount);	

		var diffInDays = DateDiffInDays(actual, initialDate);		
		expect(diffInDays).toEqual(daysCount);
    });	

    it("throws an exception if daysCount is float", function() {		
    	var initialDate = new Date();    	
		var daysCount = 1.98;		
		
		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });	

    it("throws an exception if daysCount is string", function() {		
    	var initialDate = new Date();    	
		var daysCount = "1";		

		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });	

    it("throws an exception if daysCount is array", function() {		
    	var initialDate = new Date();    	
		var daysCount = [1, 2];		

		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });	

    it("throws an exception if daysCount is object", function() {		
    	var initialDate = new Date();    	
		var daysCount = {a: 1};		

		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });

    it("throws an exception if daysCount is Date", function() {		
    	var initialDate = new Date();    	
		var daysCount = new Date();		

		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });

    it("throws an exception if daysCount is null", function() {		
    	var initialDate = new Date();    	
		var daysCount = null;		

		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });

    it("throws an exception if daysCount is undefined", function() {		
    	var initialDate = new Date();    	
		var daysCount = undefined;		

		expect(function() {
    		var actual = initialDate.addDays(daysCount);
    	}).toThrowError("Parameter daysCount should be number."); 
    });

    function DateDiffInDays(date1, date2){
    	var datediff = date1.getTime() - date2.getTime();    
    	return (datediff / (24 * 60 * 60 * 1000));
    }
});