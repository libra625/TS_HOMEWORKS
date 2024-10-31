function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var clone = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (key in obj) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
var original = { a: 1, b: { c: 2 }, d: [3, 4] };
var copy = deepClone(original);
console.log(copy);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
