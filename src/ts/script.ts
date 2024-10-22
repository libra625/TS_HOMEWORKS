const getAverage = (numbers: number[]): number => {
    const sum = numbers.reduce((acc: number, number: number): number => acc + number, 0);
    
    return sum / numbers.length;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getAverage(numbers));
