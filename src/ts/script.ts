function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    const clone = Array.isArray(obj) ? [] : {};
    
    for (const key in obj) {
        if (key in obj) {
            (clone as T)[key] = deepClone((obj as T)[key]);
        }
    }
    
    return clone as T;
}

const original = {a: 1, b: {c: 2}, d: [3, 4]};
const copy = deepClone(original);
console.log(copy)
console.log(original !== copy)
console.log(original.b !== copy.b)
console.log(original.d !== copy.d)
