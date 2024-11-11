var users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];
function filterByProperty(array, property, value) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i][property] === value) {
            result.push(array[i]);
        }
    }
    return result;
}
var activeUsers = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
// Результат: [
//   { id: 1, name: 'Alice', age: 25, isActive: true },
//   { id: 3, name: 'Charlie', age: 35, isActive: true }
// ]
var certainAgeUsers = filterByProperty(users, 'age', 35);
console.log('\n', certainAgeUsers, '\n');
var bobUsers = filterByProperty(users, 'name', 'Bob');
console.log(bobUsers);
