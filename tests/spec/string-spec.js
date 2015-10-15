describe("String 'trim'", function() {
	it("is a function of 'String' prototype", function() {				
		var actual = String.prototype.trim instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of ''", function() {				
		var actual = "".trim instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns empty string for empty string", function() {
		var str = "";		
		var actual = str.trim();
		
        expect(actual).toEqual(str);
    });	

    it("returns empty string for string of spaces", function() {
		var str = "     ";		
		var actual = str.trim();
		
        expect(actual).toEqual("");
    });	

    it("returns correct result for string with letters and spaces 1", function() {
    	var sentence = "Lorem"
		var str = "     " + sentence + "   ";		
		var actual = str.trim();
		
        expect(actual).toEqual(sentence);
    });	

    it("returns correct result for string with letters and spaces 2", function() {
    	var sentence = "Lorem ipsum dolor sit amet"
		var str = "     " + sentence + "   ";		
		var actual = str.trim();
		
        expect(actual).toEqual(sentence);
    });	

    it("returns correct result for string with letters and spaces 3", function() {
    	var sentence = "Lorem   ipsum   dolor   sit amet"
		var str = "     " + sentence + "   ";		
		var actual = str.trim();
		
        expect(actual).toEqual(sentence);
    });	
});

describe("String 'indexOfInsensitive'", function() {
	it("is a function of 'String' prototype", function() {				
		var actual = String.prototype.indexOfInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of ''", function() {				
		var actual = "".indexOfInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns -1 for empty source string", function() {
		var source = "";		
		var searchValue = "q";

		var actual = source.indexOfInsensitive(searchValue);
		
        expect(actual).toEqual(-1);
    });	

    it("returns 0 for empty searchValue and not defined fromIndex", function() {
		var source = "Lorem ipsum";		
		var searchValue = "";

		var actual = source.indexOfInsensitive(searchValue);
		
        expect(actual).toEqual(0);
    });	

    it("returns fromIndex for empty searchValue and defined fromIndex which less than length of source string", function() {
		var source = "Lorem ipsum";		
		var searchValue = "";
		var fromIndex = 3;

		var actual = source.indexOfInsensitive(searchValue, fromIndex);
		
        expect(actual).toEqual(fromIndex);
    });	

    it("returns correct result for not empty source and searchValue", function() {
		var source = "Lorem ipsum";		
		var searchValue = "IP";		
		var expectedIndex = 6;

		var actual = source.indexOfInsensitive(searchValue);
		
        expect(actual).toEqual(expectedIndex);
    });	


    it("returns correct result for not empty source and searchValue and fromIndex", function() {
		var source = "Lorem ipsum ip";		
		var searchValue = "Ip";		
		var fromIndex = 3;
		var expectedIndex = 6;

		var actual = source.indexOfInsensitive(searchValue, fromIndex);
		
        expect(actual).toEqual(expectedIndex);
    });	
});

describe("String 'endsWith'", function() {
	it("is a function of 'String' prototype", function() {				
		var actual = String.prototype.endsWith instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of ''", function() {				
		var actual = "".endsWith instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns false for empty source string", function() {
		var source = "";		
		var suffix = "q";

		var actual = source.endsWith(suffix);
		
        expect(actual).toBe(false);
    });	

    it("returns true for empty suffix", function() {
		var source = "Lorem ipsum";		
		var suffix = "";

		var actual = source.endsWith(suffix);
		
        expect(actual).toBe(true);
    });	

    it("returns true if source ends with suffix", function() {
		var source = "Lorem ipsum";		
		var suffix = "ipsum";		

		var actual = source.endsWith(suffix);
		
        expect(actual).toBe(true);
    });	

    it("returns false if source does not end with suffix", function() {
		var source = "Lorem ipsum";		
		var suffix = "Lorem";		

		var actual = source.endsWith(suffix);
		
        expect(actual).toBe(false);
    });

    it("returns false if suffix does not match correct case", function() {
		var source = "Lorem ipsum";		
		var suffix = "ipSuM";		

		var actual = source.endsWith(suffix);
		
        expect(actual).toBe(false);
    });
});

describe("String 'endsWithInsensitive'", function() {
	it("is a function of 'String' prototype", function() {				
		var actual = String.prototype.endsWithInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of ''", function() {				
		var actual = "".endsWithInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns false for empty source string", function() {
		var source = "";		
		var suffix = "q";

		var actual = source.endsWithInsensitive(suffix);
		
        expect(actual).toBe(false);
    });	

    it("returns true for empty suffix", function() {
		var source = "Lorem ipsum";		
		var suffix = "";

		var actual = source.endsWithInsensitive(suffix);
		
        expect(actual).toBe(true);
    });	

    it("returns true if source ends with suffix", function() {
		var source = "Lorem ipsum";		
		var suffix = "ipsum";		

		var actual = source.endsWithInsensitive(suffix);
		
        expect(actual).toBe(true);
    });	

    it("returns false if source does not end with suffix", function() {
		var source = "Lorem ipsum";		
		var suffix = "Lorem";		

		var actual = source.endsWithInsensitive(suffix);
		
        expect(actual).toBe(false);
    });

    it("returns true if suffix does not match correct case", function() {
		var source = "Lorem ipsum";		
		var suffix = "ipSuM";		

		var actual = source.endsWithInsensitive(suffix);
		
        expect(actual).toBe(true);
    });
});

describe("String 'startsWith'", function() {
	it("is a function of 'String' prototype", function() {				
		var actual = String.prototype.startsWith instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of ''", function() {				
		var actual = "".startsWith instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns false for empty source string", function() {
		var source = "";		
		var prefix = "q";

		var actual = source.startsWith(prefix);
		
        expect(actual).toBe(false);
    });	

    it("returns true for empty prefix", function() {
		var source = "Lorem ipsum";		
		var prefix = "";

		var actual = source.startsWith(prefix);
		
        expect(actual).toBe(true);
    });	

    it("returns true if source starts with prefix", function() {
		var source = "Lorem ipsum";		
		var prefix = "Lorem";		

		var actual = source.startsWith(prefix);
		
        expect(actual).toBe(true);
    });	

    it("returns false if source does not start with prefix", function() {
		var source = "Lorem ipsum";		
		var prefix = "ipsum";		

		var actual = source.startsWith(prefix);
		
        expect(actual).toBe(false);
    });

    it("returns false if prefix does not match correct case", function() {
		var source = "Lorem ipsum";		
		var prefix = "loRem";		

		var actual = source.startsWith(prefix);
		
        expect(actual).toBe(false);
    });
});

describe("String 'startsWithInsensitive'", function() {
	it("is a function of 'String' prototype", function() {				
		var actual = String.prototype.startsWithInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
	it("is a function of ''", function() {				
		var actual = "".startsWithInsensitive instanceof Function;
		expect(actual).toBe(true);
    });	
	
    it("returns false for empty source string", function() {
		var source = "";		
		var prefix = "q";

		var actual = source.startsWithInsensitive(prefix);
		
        expect(actual).toBe(false);
    });	

    it("returns true for empty prefix", function() {
		var source = "Lorem ipsum";		
		var prefix = "";

		var actual = source.startsWithInsensitive(prefix);
		
        expect(actual).toBe(true);
    });	

    it("returns true if source starts with prefix", function() {
		var source = "Lorem ipsum";		
		var prefix = "Lorem";		

		var actual = source.startsWithInsensitive(prefix);
		
        expect(actual).toBe(true);
    });	

    it("returns false if source does not start with prefix", function() {
		var source = "Lorem ipsum";		
		var prefix = "ipsum";		

		var actual = source.startsWithInsensitive(prefix);
		
        expect(actual).toBe(false);
    });

    it("returns true if prefix does not match correct case", function() {
		var source = "Lorem ipsum";		
		var prefix = "LoReM";		

		var actual = source.startsWithInsensitive(prefix);
		
        expect(actual).toBe(true);
    });
});
