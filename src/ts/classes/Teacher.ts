import {ITeacher} from "../interfaces/interfaces";
import {User} from "./User";
import {Course} from "./Course";

export class Teacher extends User implements ITeacher {
    courses: Course[] = [];
    
    static isTeacher(obj: unknown) {
        if (typeof obj !== 'object') return false;
        return obj instanceof Teacher;
    }
    
    addCourse(newCourse: Course[]): number {
        
        newCourse.forEach((course) => {
            if (this.courses.find((c: Course) => c.name === course.name)) {
                throw new Error(`The course "${course.name}" already exists.`);
            } else {
                this.courses.push(course);
            }
        })
        return this.courses.length;
    }
}
