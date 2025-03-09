import {Student} from "./classes/Student";
import {Teacher} from "./classes/Teacher";
import {Course} from "./classes/Course";
import {CourseManager} from "./classes/CourseManager";

const student1 = new Student('Frank', 'frank@gmail.com', '147369!')
const student2 = new Student('Fang', 'fang@gmail.com', '147369!')

const teacher1 = new Teacher('John', 'john@gmail.com', '147369!')
const teacher2 = new Teacher('Alice', 'alice@gmail.com', '147369!')


const webStorm = new Course('WebStorm', teacher1)
const React = new Course('React', teacher2)

webStorm.addStudent([student2])
React.addStudent([student2, student1])

const manager = new CourseManager([student1, student2, teacher2, teacher1], [webStorm, React]);
console.log({manager})

console.log(CourseManager.generateReport([webStorm, React]))
