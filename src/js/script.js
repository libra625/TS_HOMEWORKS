var reverseArray = function (arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        if (i === len - i - 1)
            break;
        var temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    return arr;
};
var arr = [1, 2, 3, 4, 5, 6, 7];
var reversedArr = reverseArray(arr);
console.log(reversedArr);
console.log(arr);
console.log(reversedArr === arr);
