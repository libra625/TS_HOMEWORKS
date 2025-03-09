import {IStudent} from "../interfaces/interfaces";
import {User} from "./User";
import {Course} from "./Course";

export class Student extends User implements IStudent {
    public courses: Course[] = [];
    
    static isStudent(obj: unknown) {
        if (typeof obj !== 'object') return false;
        return obj instanceof Student;
    }
    
    enroll(newCourse: Course[]): number {
        newCourse.forEach((course: Course) => {
            if (this.courses.find((c: Course) => c.name === course.name)) {
                throw new Error(`The course "${course.name}" already exists.`);
            } else {
                this.courses.push(course);
            }
        })
        return this.courses.length;
    }
}
