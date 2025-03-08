import Student from "./Student.js";
import Teacher from "./Teacher.js";
import Course from "./Course.js";
import CourseManager from "./CourseManager.js";

const s1 = new Student({name: 'Carl', email: 'carl@gmail.com'})
const s2 = new Student({name: 'John', email: 'john@gmail.com'})

const t1 = new Teacher({name: 'Frank', email: 'frank@ukr.net'})
const t2 = new Teacher({name: 'Fang', email: 'fang@gmail.com'})

const c1 = new Course("TypeScript", t1);
const c2 = new Course("WebStorm Guide", t2);

const cm = new CourseManager()

cm.addCourse(c1)
cm.addCourse(c2)

cm.addUser(s1)
cm.addUser(s2)
cm.addUser(t1)
cm.addUser(t2)

console.log(cm)

cm.assignTeacherToCourse(1, 4)
cm.assignTeacherToCourse(2, 3)

cm.enrollStudentToCourse(1, 1)
cm.enrollStudentToCourse(1, 2)

cm.enrollStudentToCourse(2, 1)
cm.enrollStudentToCourse(2, 2)

console.log(cm.generateReport())

