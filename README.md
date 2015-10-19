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
object.isArray();
```

#### Return Value
**true** if the tested object is Array; otherwise, **false**.

#### Examples

```js
[1,2,3].isArray();  // true
"a".isArray();      // false
```

### 2. Object.prototype.isString()
> The **isString()** method determines whether the tested object is String.

#### Syntax
```js
object.isString();
```

#### Return Value
**true** if the tested object is String; otherwise, **false**.

#### Examples

```js
"a".isString();      // true
"".isString();       // true
[1,2,3].isString();  // false
```

### 3. Object.prototype.clone()
> The **clone()** method returns a clone of the object (only data fields, not function).

#### Syntax
```js
object.clone();
```

#### Return Value
**object** that is clone of the passed object.

#### Examples

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

#### Return Value
**true** if the tested object is integer; otherwise, **false**.

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

#### Return Value
**true** if the tested object is integer; otherwise, **false**.

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
str.trim();
```

#### Return Value
The string that remains after all spaces are removed from the start and end of the current string.

#### Examples

```js
"  Lorem impus ".trim();                      // "Lorem impus"
"Lorem impus".trim();                         // "Lorem impus"
"  Lorem   ipsum   dolor   sit amet".trim();  // "Lorem   ipsum   dolor   sit amet"
"   ".trim();                                 // ""
"".trim();                                    // ""
```

### 2. String.prototype.indexOfInsensitive()
> The **indexOfInsensitive()** method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
> The indexOfInsensitive() method is case insensitive.

#### Syntax
```js
str.indexOfInsensitive(searchValue[, fromIndex]);
```

#### Parameters
* **searchValue** - A string representing the value to search for.
* **fromIndex** - (optional) The location within the calling string to start the search from. It can be any integer. The default value is 0. If fromIndex < 0 the entire string is searched (same as passing 0). If fromIndex >= str.length, the method will return -1 unless searchValue is an empty string in which case str.length is returned.

_For more information visit [developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)_

#### Return Value
The zero-based **index** position of value if that value is found, or **-1** if it is not.

#### Examples

```js
"Lorem impus".indexOfInsensitive("Lorem");  // 0
"Lorem impus".indexOfInsensitive("LoReM");  // 0
"Lorem impus".indexOfInsensitive("Norem");  // -1
"Lorem impus".indexOfInsensitive("IM");     // 6
"Lorem impus".indexOfInsensitive("IM", 5);  // 6

```

### 3. String.prototype.endsWith()
> The **endsWith()** method determines whether the end of this string instance matches the specified string suffix.
> The endsWith() method is case sensitive.

#### Syntax
```js
str.endsWith(suffix);
```

#### Parameters
* **suffix** - The string to compare to the substring at the end of this instance.

#### Return Value
**true** if value matches the end of this instance; otherwise, **false**.

#### Examples

```js
"Lorem impus".endsWith("impus");  // true
"Lorem impus".endsWith("IMPUS");  // false
"Lorem impus".endsWith("amet");   // false
"Lorem impus".endsWith("");       // true
"Lorem impus".endsWith(null);     // false
"Lorem impus 5".endsWith(5);      // true
"".endsWith("")                   // true
```

### 4. String.prototype.endsWithInsensitive()
> The **endsWithInsensitive()** method determines whether the end of this string instance matches the specified string suffix.
> The endsWithInsensitive() method is case insensitive.

#### Syntax
```js
str.endsWithInsensitive(suffix);
```

#### Parameters
* **suffix** - The string to compare to the substring at the end of this instance.

#### Return Value
**true** if value matches the end of this instance; otherwise, **false**.

#### Examples

```js
"Lorem impus".endsWithInsensitive("impus");  // true
"Lorem impus".endsWithInsensitive("IMPUS");  // true
"Lorem impus".endsWithInsensitive("amet");   // false
"Lorem impus".endsWithInsensitive("");       // true
"Lorem impus".endsWithInsensitive(null);     // false
"Lorem impus 5".endsWithInsensitive(5);      // true
"".endsWithInsensitive("")                   // true
```


### 5. String.prototype.startsWith()
> The **startsWith()** method determines whether the beginning of this string instance matches the specified string prefix.
> The startsWith() method is case sensitive.

#### Syntax
```js
str.startsWith(prefix);
```

#### Parameters
* **prefix** - The string to compare to the substring at the beginning of this instance.

#### Return Value
**true** if value matches the beginning of this instance; otherwise, **false**.

#### Examples

```js
"Lorem impus".startsWith("Lorem");  // true
"Lorem impus".startsWith("LOREM");  // false
"Lorem impus".startsWith("amet");   // false
"Lorem impus".startsWith("");       // true
"Lorem impus".startsWith(null);     // false
"5 Lorem impus".startsWith(5);      // true
"".startsWith("")                   // true
```

### 6. String.prototype.startsWithInsensitive()
> The **startsWithInsensitive()** method determines whether the beginning of this string instance matches the specified string suffix.
> The startsWithInsensitive() method is case insensitive.

#### Syntax
```js
str.startsWithInsensitive(prefix);
```

#### Parameters
* **prefix** - The string to compare to the substring at the beginning of this instance.

#### Return Value
**true** if value matches the beginning of this instance; otherwise, **false**.

#### Examples

```js
"Lorem impus".startsWithInsensitive("Lorem");  // true
"Lorem impus".startsWithInsensitive("LOREM");  // true
"Lorem impus".startsWithInsensitive("amet");   // false
"Lorem impus".startsWithInsensitive("");       // true
"Lorem impus".startsWithInsensitive(null);     // false
"5 Lorem impus".startsWithInsensitive(5);      // true
"".startsWithInsensitive("")                   // true
```


## Array extensions
### 1. Array.prototype.last()
> The **last()** method returns the last element of the array, or undefined if the array is empty.

#### Syntax
```js
array.last();
```
#### Examples

```js
[1,2,3].last();  // 3
["a"].last();    // "a"
[].last();       // undefined
```

### 2. Array.prototype.first()
> The **first()** method returns the first element of the array, or undefined if the array is empty.

#### Syntax
```js
array.first();
```
#### Examples

```js
[1,2,3].first();  // 1
["a"].last();     // "a"
[].last();        // undefined
```

## LICENSE
[The MIT License](https://github.com/Sufflavus/Colibri/blob/master/LICENSE)