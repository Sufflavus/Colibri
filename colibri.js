(function(){

	if (!Array.prototype.last) {
		Array.prototype.last = function() {
		    return this[this.length - 1];
		};
	}

	if (!Array.prototype.first) {
		Array.prototype.first = function() {
		    return this[0];
		};
	}

	if (!Array.prototype.isEmpty) {
		Array.prototype.isEmpty = function() {
		    this.length === 0;
		};
	}

	if (!Object.prototype.clone) {
		Object.prototype.clone = function() {
			return JSON.parse(JSON.stringify(this));
		};
	}

	function isArray(value) {
	    return Object.prototype.toString.call(value) === "[object Array]";
	}

	if (!Array.prototype.removeEmpty) {
	    Array.prototype.removeEmpty = function() {
	        return this.filter(function(item) { 
	        	return item; 
	        });	        
	    };
	}

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

	if (!String.prototype.trim) {
	    String.prototype.trim = function () {
	        return this.replace(/^\s+|\s+$/g, '');
	    };
	}

	if (!String.prototype.indexOfInsensitive) {
	    String.prototype.indexOfInsensitive = function (searchValue, fromIndex) {
	        return this.toUpperCase().indexOf(searchValue.toUpperCase(), fromIndex);
	    };
	}

	if (!String.prototype.endsWith) {
	    String.prototype.endsWith = function(suffix) {
	        return this.indexOf(suffix, this.length - suffix.length) !== -1;
	    };
	}

	if (!String.prototype.startsWith) {
	    String.prototype.startsWith = function(prefix) {
	        return this.indexOf(prefix, 0) === 0;
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

	var Colibri = {};
	Colibri.utils = {};

	Colibri.utils.createGuid = (function () {
	    function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000)
	                   .toString(16)
	                   .substring(1);
	    }
	    return function () {
	        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	               s4() + '-' + s4() + s4() + s4();
	    };
	})();


	Colibri.utils.getRandomInt = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
})();