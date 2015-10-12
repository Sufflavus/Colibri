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

		expect(resultParts.length).toBe(5);
		expect(resultParts[0].length).toBe(8);
		expect(resultParts[1].length).toBe(4);
		expect(resultParts[2].length).toBe(4);
		expect(resultParts[3].length).toBe(4);
		expect(resultParts[4].length).toBe(12);
    });		
});