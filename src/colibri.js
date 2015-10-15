(function(){
	/*has tests*/
	if (!Array.prototype.last) {
		Array.prototype.last = function() {
		    return this[this.length - 1];
		};
	}

	/*has tests*/
	if (!Array.prototype.first) {
		Array.prototype.first = function() {
		    return this[0];
		};
	}

	/*has tests*/
	if (!Array.prototype.isEmpty) {
		Array.prototype.isEmpty = function() {
		    return this.length === 0;
		};
	}
	
	if (!Array.prototype.removeEmpty) {
	    Array.prototype.removeEmpty = function() {
	        return this.filter(function(item) { 
	        	return item; 
	        });	        
	    };
	}

	/*has tests*/
	if (!Array.prototype.contains) {
	    Array.prototype.contains = function (value) {
	        return this.indexOf(value) >= 0;
	    };
	}

	if (!Array.prototype.indexOfInsensitive) {
	    Array.prototype.indexOfInsensitive = function (value) {
	        var upperCaseArray = this.map(function (value) {
	            return value.toUpperCase();
	        });
	        return upperCaseArray.indexOf(value.toUpperCase());
	    };
	}

	if (!Array.prototype.max) {
	    Array.prototype.max = function () {
	        return Math.max.apply(Math, this);
	    };
	}

	if (!Array.prototype.min) {
	    Array.prototype.min = function () {
	        return Math.min.apply(Math, this);
	    };
	}

	if (!Object.prototype.clone) {
		Object.prototype.clone = function() {
			return JSON.parse(JSON.stringify(this));
		};
	}
	
	/*has tests*/
	if (!Object.prototype.isArray) {
		Object.prototype.isArray = function() {
			return Object.prototype.toString.call(this) === "[object Array]";
		};
	}

	/*has tests*/
	if (!Number.isInteger) {
		Number.isInteger = function (value) {
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
		    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
		};
	}

	/*has tests*/
	if (!Number.isFloat) {
		Number.isFloat = function (value) {
			// http://stackoverflow.com/questions/3885817/how-to-check-that-a-number-is-float-or-integer
		    return Number(value) === value && value % 1 !== 0 || Number.isInteger(value);
		};
	}

	/*has tests*/
	if (!String.prototype.trim) {
	    String.prototype.trim = function () {
	        return this.replace(/^\s+|\s+$/g, '');
	    };
	}

	/*has tests*/
	if (!String.prototype.indexOfInsensitive) {
	    String.prototype.indexOfInsensitive = function (searchValue, fromIndex) {
	    	if(!this.length){
	    		return -1;
	    	}

	    	if(!searchValue.length){
	    		return this.indexOf(searchValue, fromIndex);
	    	}

	        return this.toUpperCase().indexOf(searchValue.toUpperCase(), fromIndex);
	    };
	}

	/*has tests*/
	if (!String.prototype.endsWith) {
	    String.prototype.endsWith = function(suffix) {
	    	return this.indexOf(suffix, this.length - suffix.length) !== -1;
	    };
	}

	/*has tests*/
	if (!String.prototype.endsWithInsensitive) {
	    String.prototype.endsWithInsensitive = function(suffix) {	    	
	        return this.toUpperCase().endsWith(suffix.toUpperCase());
	    };
	}

	/*has tests*/
	if (!String.prototype.startsWith) {
	    String.prototype.startsWith = function(prefix) {
	        return this.indexOf(prefix, 0) === 0;
	    };
	}

	/*has tests*/
	if (!String.prototype.startsWithInsensitive) {
	    String.prototype.startsWithInsensitive = function(prefix) {
	        return this.toUpperCase().startsWith(prefix.toUpperCase());
	    };
	}

	if (!Date.prototype.addDays) {
	    Date.prototype.addDays = function(daysCount) {
	        var dat = new Date(this.valueOf());
	        dat.setDate(dat.getDate() + daysCount);
	        return dat;
	    }
	}

	Function.prototype.memoized = function () {
	    var key = JSON.stringify(Array.prototype.slice.call(arguments));
	    this._values = this._values || {};
	    return this._values[key] !== undefined ?
	        this._values[key] :
	        this._values[key] = this.apply(this, arguments);
	};

	Function.prototype.memoize = function () {
	    var fn = this;
	    return function () {
	        return fn.memoized.apply(fn, arguments);
	    };
	};	
})();