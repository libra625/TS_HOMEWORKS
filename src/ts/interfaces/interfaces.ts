import {Course} from "../classes/Course";
import {Teacher} from "../classes/Teacher";
import {Student} from "../classes/Student";
import {User} from "../classes/User";


export interface IBaseModal {
    createdAt: Date;
    
    validate(): boolean;
}

export interface IUser extends IBaseModal {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface IStudent extends IUser {
    courses: Course[];
    
    enroll(newCourse: Course[]): number;
}

export interface ITeacher extends IUser {
    courses: Course[];
    
    addCourse(newCourse: Course[]): number;
}

export interface ICourse extends IBaseModal {
    name: string;
    teacher: Teacher;
    id: number;
    students: Student[];
    
    addStudent(newStudent: Student[]): number;
    
    removeStudent(studentInstance: Student[]): number;
}

export interface ICourseManager {
    users: User[];
    courses: Course[];
    
    addUser(user: User[]): number;
    
    addCourse(course: ICourse[]): number;
    
    assignTeacherToCourse(courseId: number, teacherId: number): void;
    
    enrollStudentToCourse(courseId: number, studentId: number): void;
    
}
