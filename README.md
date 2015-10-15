# Colibri
JavaScript custom Extensions

## List of extensions

1. Array.prototype.last()
2. Array.prototype.first()
3. Array.prototype.isEmpty()
4. Array.prototype.contains(item)
5. Object.prototype.isArray()

## 1. Array.prototype.last()
> The **last()** method returns the last element of the array, or undefined if the array is empty.

### Syntax
```js
var last = [1,2,3].last();
```
### Examples
#### Using last()
The following example uses **last()** to get the last element of array.

```js
[1,2,3].last(); // 3
["a"].last(); // "a"
[].last(); // undefined
```

## 2. Array.prototype.first()
> The **first()** method returns the first element of the array, or undefined if the array is empty.

### Syntax
```js
var first = [1,2,3].first();
```
### Examples
#### Using first()
The following example uses **first()** to get the first element of array.

```js
[1,2,3].first(); // 1
["a"].last(); // "a"
[].last(); // undefined
```

## LICENSE
[The MIT License](https://github.com/Sufflavus/Colibri/blob/master/LICENSE)