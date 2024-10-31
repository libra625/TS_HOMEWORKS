var createTree = function (amount) {
    if (amount === 0) {
        return null;
    }
    //return 'sdds'
    return {
        value: amount,
        child: createTree(amount - 1)
    };
};
console.log(createTree(5));
