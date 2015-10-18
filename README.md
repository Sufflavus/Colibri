# Colibri
JavaScript custom Extensions and helpful functions

## Setup & Dependencies
1. colibri.js (does not have any dependencies)
2. colibri-utils.js (depends on colibri.js)

```html
<head>
    
</head>
<body>

    <script src="../src/colibri.js"></script>
    <script src="../src/colibri-utils.js"></script>
</body>
```

## List of extensions (colibri.js)

### *Object extensions*
1. Object.prototype.isArray()
2. Object.prototype.isString()
3. Object.prototype.clone()

### *Number extensions*
1. Number.isInteger()
2. Number.isFloat()

### *String extensions*
1. String.prototype.trim()
2. String.prototype.indexOfInsensitive()
3. String.prototype.endsWith()
4. String.prototype.endsWithInsensitive()
5. String.prototype.startsWith()
6. String.prototype.startsWithInsensitive()

### *Date extensions*
1. Date.prototype.addDays()

### *Array extensions*
1. Array.prototype.last()
2. Array.prototype.first()
3. Array.prototype.isEmpty()
4. Array.prototype.removeEmpty()
5. Array.prototype.contains()
6. Array.prototype.indexOfInsensitive()
7. Array.prototype.max()
8. Array.prototype.min()

## Colibri.utils functions (colibri-utils.js)
1. Colibri.utils.createGuid()
2. Colibri.utils.getRandomInt(min, max)

## Object extensions
### 1. Object.prototype.isArray()
> The **isArray()** method determines whether the tested object is Array.

#### Syntax
```js
var value = [1,2,3];
var isArray = value.isArray();
```
#### Examples

```js
[1,2,3].isArray();  // true
"a".isArray();      // false
```

### 2. Object.prototype.isString()
> The **isString()** method determines whether the tested object is String.

### Syntax
```js
var value = "";
var isString = value.isString();
```
### Examples

```js
"a".isString();      // true
"".isString();       // true
[1,2,3].isString();  // false
```

### 3. Object.prototype.clone()
> The **clone()** method returns a clone of the object (only data fields, not function).

### Syntax
```js
var value = { a: { b: 1 } };
var clone = value.clone();
```
### Examples

```js
var value = { a: { b: 1 } };
var clone = value.clone(); // { a: { b: 1 } }

value = { 
			a: { 
				b: 1, 
				foo: function(){}
			},
			c: "lorem"
		};

clone = value.clone();     // { a: { b: 1 }, c: "lorem" }

value = "Lorem";
clone = value.clone();     // "Lorem"
```

## Number extensions
### 1. Number.isInteger()
> The **isInteger()** method determines whether the passed value is an integer.

_For more information visit [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)_

#### Syntax
```js
Number.isInteger(value);
```

#### Parameters
* **value** - The value to be tested for being an integer.

#### Examples

```js
Number.isInteger(0.1);      // false
Number.isInteger(1);        // true
Number.isInteger(Math.PI);  // false
Number.isInteger(-100000);  // true
Number.isInteger(0);        // true
Number.isInteger("10");     // false
Number.isInteger(null);     // false
```

### 2. Number.isFloat()
> The **isFloat()** method determines whether the passed value is an float.

#### Syntax
```js
Number.isFloat(value);
```

#### Parameters
* **value** - The value to be tested for being a float.

#### Examples

```js
Number.isFloat(0.1);      // true
Number.isFloat(-10.1);    // true
Number.isFloat(1);        // true
Number.isFloat(Math.PI);  // true
Number.isFloat(-100000);  // true
Number.isFloat(NaN);      // false
Number.isFloat(0);        // true
Number.isFloat("10");     // false
```

## String extensions
### 1. String.prototype.trim()
> The **trim()** method removes spaces from the beginning and the ending of the string but not from the middle of the string.

#### Syntax
```js
var value = "  Lorem impus ";
var result = value.trim();
```
#### Examples

```js
"  Lorem impus ".trim();                      // "Lorem impus"
"Lorem impus".trim();                         // "Lorem impus"
"  Lorem   ipsum   dolor   sit amet".trim();  // "Lorem   ipsum   dolor   sit amet"
"   ".trim();                                 // ""
"".trim();                                    // ""
```

## Array extensions
### 1. Array.prototype.last()
> The **last()** method returns the last element of the array, or undefined if the array is empty.

### Syntax
```js
var last = [1,2,3].last();
```
### Examples

```js
[1,2,3].last();  // 3
["a"].last();    // "a"
[].last();       // undefined
```

### 2. Array.prototype.first()
> The **first()** method returns the first element of the array, or undefined if the array is empty.

### Syntax
```js
var first = [1,2,3].first();
```
### Examples

```js
[1,2,3].first();  // 1
["a"].last();     // "a"
[].last();        // undefined
```

## LICENSE
[The MIT License](https://github.com/Sufflavus/Colibri/blob/master/LICENSE)