const reverseArray = function (arr: number[]): number[] {
    const len: number = arr.length
    for (let i: number = 0; i < len - 1; i++) {
        if (i === len - i - 1) break
        
        const temp = arr[i]
        arr[i] = arr[len - i - 1]
        arr[len - i - 1] = temp
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const reversedArr = reverseArray(arr)
console.log(reversedArr)
console.log(arr)
console.log(reversedArr === arr)
