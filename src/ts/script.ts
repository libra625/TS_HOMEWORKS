// task 1
const myStringVariable: string = 'Hello World'
console.log(myStringVariable)

const myNumberVariable: number = 255
console.log(myNumberVariable)

const myBooleanVariable: boolean = true
console.log(myBooleanVariable)

const myNullVariable: null = null
console.log(myNullVariable)

const myUndefinedVariable: undefined = undefined
console.log(myUndefinedVariable)

const myObjectVariable: object = { key: 'value' }
console.log(myObjectVariable)

let myAnyVariable: any = 'This can be any type'
console.log(myAnyVariable)
myAnyVariable = 2555
console.log(myAnyVariable)

const myUnknownVariable: unknown = 10
console.log(myUnknownVariable)

const list: number[] = [1, 2, 3, 4, 5, 6]
console.log(list)
const list2: number[] = [1, 2, 3, 4, 5, 6]
console.log(list2)

function myVoidFunction (): void {
    console.log("This function doesn't return anything.")
}

myVoidFunction()

// function myNeverFunction(): never {
//     throw new Error("This function never returns or always throws an error.");
// }
//
// myNeverFunction();

// task2

interface Person {
    name: string
    age: number
    hobbies: string[]
}

const vladAnimal: Person = {
    name: 'Vlad',
    age: 30,
    hobbies: ['loving js', 'hating SCSS', 'hating Bootstrap']
}

// task3
const sum = (number1: number, number2: number): number => number1 + number2
console.log(sum(55, 36))

// console.log(sum(55, '36'));

// task4
enum Days {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
}

const todayFriday: Days = Days.Friday
console.log(todayFriday)
