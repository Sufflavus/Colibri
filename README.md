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

### *[Object extensions](#object)*
1. Object.prototype.isArray()
2. Object.prototype.isString()
3. Object.prototype.isFunction()
4. Object.prototype.clone()

### *[Number extensions](#number)*
1. Number.isInteger()
2. Number.isFloat()

### *[String extensions](#string)*
1. String.prototype.trim()
2. String.prototype.indexOfInsensitive()
3. String.prototype.endsWith()
4. String.prototype.endsWithInsensitive()
5. String.prototype.startsWith()
6. String.prototype.startsWithInsensitive()

### *[Date extensions](#date)*
1. Date.prototype.addDays()

### *[Array extensions](#array)*
1. Array.prototype.last()
2. Array.prototype.first()
3. Array.prototype.isEmpty()
4. Array.prototype.isNotEmpty()
5. Array.prototype.removeEmpty()
6. Array.prototype.contains()
7. Array.prototype.indexOfInsensitive()
8. Array.prototype.max()
9. Array.prototype.min()

## List of Colibri.utils functions (colibri-utils.js)
1. Colibri.utils.createGuid()
2. Colibri.utils.getRandomInt(min, max)
3. Colibri.utils.arrayFirst(array, predicate)
4. Colibri.utils.arrayRemoveItem(array, itemToRemove)
5. Colibri.utils.dictionaryForEach(dictionary, callback)

## Extensions (colibri.js)
## <a name="object"></a>Object extensions
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

### 3. Object.prototype.isFunction()
> The **isFunction()** method determines whether the tested object is Function.

#### Syntax
```js
object.isFunction();
```

#### Return Value
**true** if the tested object is Function; otherwise, **false**.

#### Examples

```js
function test(){}
test.isFunction();     // true
"a".isFunction();      // false
"".isFunction();       // false
[1,2,3].isFunction();  // false
```

### 4. Object.prototype.clone()
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

## <a name="number"></a>Number extensions
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

## <a name="string"></a>String extensions
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

## <a name="date"></a>Date extensions
### 1. Date.prototype.addDays()
> The **addDays()** method adds specified number of days to current value.

#### Syntax
```js
date.addDays(5);
```

#### Parameters
* **daysCount** - The number of days (int) to be added.

#### Return Value
The new date with added number of days.

```js
(new Date()).addDays(1);    // tomorrow
(new Date()).addDays(-1);   // yesterday
(new Date()).addDays("1");  // Error
```

## <a name="array"></a>Array extensions
### 1. Array.prototype.last()
> The **last()** method returns the last element of the array, or undefined if the array is empty.

#### Syntax
```js
array.last();
```

#### Return Value
The last element of the array, or undefined if the array is empty.

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

#### Return Value
The first element of the array, or undefined if the array is empty.

#### Examples

```js
[1,2,3].first();  // 1
["a"].first();    // "a"
[].first();       // undefined
```

### 3. Array.prototype.isEmpty()
> The **isEmpty()** method determines whether the array does not contain any element.

#### Syntax
```js
array.isEmpty();
```

#### Return Value
**true** if the array does not contain any element; otherwise, **false**.

#### Examples

```js
[1,2,3].isEmpty();  // false
[].first();         // true
[, , ].isEmpty();   // false
[""].isEmpty();     // false
```

### 4. Array.prototype.isNotEmpty()
> The **isNotEmpty()** method determines whether the array contains at least one element.

#### Syntax
```js
array.isNotEmpty();
```

#### Return Value
**true** if the array contains at least one element; otherwise, **false**.

#### Examples

```js
[1,2,3].isNotEmpty();    // true
["lorem"].isNotEmpty();  // true
[].isNotEmpty();         // false
[, , ].isNotEmpty();     // false
```

### 5. Array.prototype.removeEmpty()
> The **removeEmpty()** method removes empty elements (null, NaN, undefined, "") from an array.

#### Syntax
```js
array.removeEmpty();
```

#### Return Value
The array that remains after all empty elements are removed from the current array.

#### Examples

```js
[, , ].removeEmpty();                  // []
[, 1, null, undefined].removeEmpty();  // [1]
[1, 2, 3].removeEmpty();               // [1, 2, 3]
["", {}, 0].removeEmpty();             // [{}, 0]
```

### 6. Array.prototype.contains()
> The **contains()** method determines whether an element is in the array.

#### Syntax
```js
array.contains(item);
```

#### Parameters
* **item** - The object to locate in the array.

#### Return Value
**true** if item is found in the array; otherwise, **false**.

#### Examples

```js
[2, 0, ''].contains(0);                // true
[2, 0, null].contains(null);           // true
["lorem", "impus"].contains("lorem");  // true
["lorem", "impus"].contains(1);        // false
```

### 7. Array.prototype.indexOfInsensitive()
> The **indexOfInsensitive()** method returns the first index at which a given element can be found in the array, or -1 if it is not present.
> The indexOfInsensitive() method is case insensitive.

#### Syntax
```js
array.indexOf(searchElement[, fromIndex = 0])
```

#### Parameters
* **searchElement** - Element to locate in the array.
* **fromIndex** - (optional) The index to start the search at. It can be any integer. The default value is 0. If fromIndex < 0, it is taken as the offset from the end of the array. If fromIndex >= array.length, the method will return -1.

_For more information visit [developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)_

#### Return Value
The zero-based **index** position of searchElement if that searchElement is found, or **-1** if it is not.

#### Examples

```js
var array = ["Lorem", "impus", 5];
array.indexOfInsensitive("impus");  // 1
array.indexOfInsensitive("LoReM");  // 0
array.indexOfInsensitive("a");      // -1
array.indexOfInsensitive(5, 2);     // 2

```

### 8. Array.prototype.max()
> The **max()** method finds the maximum element in a numeric array.
> The max() method works only if all the elements in array are float numbers.

#### Syntax
```js
array.max()
```

_For more information visit [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)_

#### Return Value
The largest one element of the array or **undefined** if array is empty.

#### Examples

```js
[1, 3, 8].max();        // 8
[].max();               // undefined
["Lorem", 1, 5].max();  // error
```

### 9. Array.prototype.min()
> The **min()** method finds the minimum element in a numeric array.
> The min() method works only if all the elements in array are float numbers.

#### Syntax
```js
array.min()
```

_For more information visit [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)_

#### Return Value
The smalest one element of the array or **undefined** if array is empty.

#### Examples

```js
[1, -3, 8].min();       // -3
[].min();               // undefined
["Lorem", 1, 5].min();  // error
```

## Colibri.utils functions (colibri-utils.js)
### 1. Colibri.utils.createGuid()
> The **createGuid()** method generates new random Guid.

#### Syntax
```js
var guid = Colibri.utils.createGuid();
```

#### Return Value
New random **Guid** (string).

#### Examples

```js
Colibri.utils.createGuid();  // "0ef73963-bea8-ebf9-af71-897958421e2e"
```

### 2. Colibri.utils.getRandomInt()
> The **getRandomInt()** method returns a random number within a specified range.

#### Syntax
```js
avar randon = Colibri.utils.getRandomInt([min[, max]]);
```

#### Parameters
* **min** - (int, optional) The inclusive lower bound of the random number returned. Default value is 0.
* **max** - (int, optional) The exclusive upper bound of the random number returned. Max must be greater than or equal to min. Default value is Number.MAX_VALUE.

#### Return Value
A signed integer greater than or equal to min and less or equal than max; that is, the range of return values includes min and max. If min equals max, min is returned. 

#### Examples

```js
Colibri.utils.getRandomInt(1, 8);  // 6
Colibri.utils.getRandomInt(1);     // 1.794066025907234e+308
Colibri.utils.getRandomInt();      // 1.0024528559121937e+308
Colibri.utils.getRandomInt("12");  // Error

```

### 3. Colibri.utils.arrayFirst()
> The **arrayFirst()** method returns the first item of an array that is matched the predicate function.

#### Syntax
```js
avar first = Colibri.utils.arrayFirst(array, predicate);
```

#### Parameters
* **array** - array in which item is searching.
* **predicate** - (function) function that returns true for searching item.

#### Return Value
The first item of an array that is matched the predicate function; null if item is not found.

#### Examples

```js

var array = [1, 3, 8];			
var first = Colibri.utils.arrayFirst(array, function (item){
	return item > 2;
});
// first equal 3

first = Colibri.utils.arrayFirst(array, function (item){
	return item > 10;
});
// first is null

```

### 4. Colibri.utils.arrayRemoveItem()
> The **arrayRemoveItem()** method removes first accurance of item from an array.
> The arrayRemoveItem() method removes item from array that is passed as first parameter.

#### Syntax
```js
Colibri.utils.arrayRemoveItem(array, itemToRemove);
```

#### Parameters
* **array** - array in which item is searching.
* **itemToRemove** - (object) item of array that should be removed.

#### Examples

```js
var array = [1, 3, 8];		
Colibri.utils.arrayRemoveItem(array, 3); // array == [1, 8]
```

### 5. Colibri.utils.dictionaryForEach()
> The **dictionaryForEach()** method executes a provided function once per dictionary element.
> The dictionaryForEach() method executes only for own properties of an object.

#### Parameters
* **dictionary** - object that structured like a dictionary, for example, {a: 1, b: 2}.
* **callback** - function to execute for each element, taking two arguments: 
  * **key** - the current element's key being processed in the dictionary, and 
  * **value** - the current element's value.

#### Examples

```js
var dict = {a: 1, b: 2};

function logDictionaryElements(key, value) {
  console.log("key = " + key + "; value = " + value);
}

Colibri.utils.dictionaryForEach(dict, logDictionaryElements);

// logs:
// key = a; value = 1
// key = b; value = 2


```

## LICENSE
[The MIT License](https://github.com/Sufflavus/Colibri/blob/master/LICENSE)