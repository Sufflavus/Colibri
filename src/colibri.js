// JavaScript custom Extensions
// @author Sufflavus https://github.com/Sufflavus
// @version 1.1.0 

(function(){
    if (!Object.prototype.isArray) {
        Object.prototype.isArray = function() {
            return Object.prototype.toString.call(this) === "[object Array]";
        };
    }

    if (!Object.prototype.isString) {
        Object.prototype.isString = function() {
            return Object.prototype.toString.call(this) === "[object String]";
        };
    }

    if (!Object.prototype.isFunction) {
        Object.prototype.isFunction = function() {
            return Object.prototype.toString.call(this) === "[object Function]";
        };
    }

    if (!Object.prototype.clone) {
        Object.prototype.clone = function() {
            return JSON.parse(JSON.stringify(this));
        };
    }

    if (!Number.isInteger) {
        Number.isInteger = function (value) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        };
    }

    if (!Number.isFloat) {
        Number.isFloat = function (value) {
            // http://stackoverflow.com/questions/3885817/how-to-check-that-a-number-is-float-or-integer
            return Number(value) === value && value % 1 !== 0 || Number.isInteger(value);
        };
    }

    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    if (!String.prototype.indexOfInsensitive) {
        String.prototype.indexOfInsensitive = function (searchValue, fromIndex) {
            if(!this.length){
                return -1;
            }

            if(fromIndex && !Number.isInteger(fromIndex)) {
                throw new Error("Parameter fromIndex should be numbers.");
            }

            if(!searchValue.isString()) {
                return this.indexOf(searchValue, fromIndex);
            }

            return this.toUpperCase().indexOf(searchValue.toUpperCase(), fromIndex);
        };
    }

    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(suffix) {
            suffix = "" + suffix; // fix for IE
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }

    if (!String.prototype.endsWithInsensitive) {
        String.prototype.endsWithInsensitive = function(suffix) {   
            if(!suffix || !suffix.isString()){
                return this.toUpperCase().endsWith(suffix);
            }    

            return this.toUpperCase().endsWith(suffix.toUpperCase());
        };
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(prefix) {
            return this.indexOf(prefix, 0) === 0;
        };
    }

    if (!String.prototype.startsWithInsensitive) {
        String.prototype.startsWithInsensitive = function(prefix) {
            if(!prefix || !prefix.isString()){
                return this.toUpperCase().startsWith(prefix);
            }   

            return this.toUpperCase().startsWith(prefix.toUpperCase());
        };
    }

    if (!Date.prototype.addDays) {
        Date.prototype.addDays = function(daysCount) {
            if(!Number.isInteger(daysCount)){
                throw new Error("Parameter daysCount should be number.");
            }

            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + daysCount);
            return date;
        }
    }

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
            return !this.length;
        };
    }

    if (!Array.prototype.isNotEmpty) {
        Array.prototype.isNotEmpty = function() {
            return !!this.length;
        };
    }

    if (!Array.prototype.removeEmpty) {
        Array.prototype.removeEmpty = function() {
            return this.filter(function(item) { 
                return item === 0 || !!item; 
            });
        };
    }

    if (!Array.prototype.pushAll) {
        Array.prototype.pushAll = function (array) {
            if(!array || !array.isArray()) {
                throw new Error("The argument should be an array.");
            }

            return this.push.apply(this, array);
        };
    }

    if (!Array.prototype.contains) {
        Array.prototype.contains = function (item) {
            return this.indexOf(item) >= 0;
        };
    }

    if (!Array.prototype.any) {
        Array.prototype.any = function (predicate) {
            if(predicate.isFunction) {
                return this.some(predicate);
            }
            if(!!predicate) {
                throw new Error("If predicate exists, it should be a function.");
            }
            return this.length > 0;
        };
    }

    if (!Array.prototype.indexOfInsensitive) {
        Array.prototype.indexOfInsensitive = function (searchElement, fromIndex) {
            if(!this.length){
                return -1;
            }

            if(fromIndex && !Number.isInteger(fromIndex)) {
                throw new Error("Parameter fromIndex should be numbers.");
            }

            if(!searchElement.isString()) {
                return this.indexOf(searchElement, fromIndex);
            }

            var upperCaseArray = this.map(function (item) {
                return item.isString() ? item.toUpperCase() : item;
            });
            return upperCaseArray.indexOf(searchElement.toUpperCase(), fromIndex);
        };
    }

    if (!Array.prototype.max) {
        Array.prototype.max = function () {
            if(!this.length){
                return undefined;
            }

            for(var i = 0, j = this.length; i < j; i++) {
                if(!Number.isFloat(this[i])) {
                    throw new Error("All items in array should be numbers.");
                }
            }

            return Math.max.apply(Math, this);
        };
    }

    if (!Array.prototype.min) {
        Array.prototype.min = function () {
            if(!this.length){
                return undefined;
            }

            for(var i = 0, j = this.length; i < j; i++){
                if(!Number.isFloat(this[i])){
                    throw new Error("All items in array should be numbers.");
                }
            }

            return Math.min.apply(Math, this);
        };
    }

    /*Function.prototype.memoized = function () {
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
    };*/    
})();