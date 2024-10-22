var getAverage = function (numbers) {
    var sum = numbers.reduce(function (acc, number) { return acc + number; }, 0);
    return sum / numbers.length;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getAverage(numbers));
