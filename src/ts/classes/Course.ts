import {ICourse} from "../interfaces/interfaces";
import {Teacher} from "./Teacher";
import {Student} from "./Student";
import {BaseModal} from "./BaseModel";

export class Course extends BaseModal implements ICourse {
    private static currentId: number = 1;
    name: string;
    teacher: Teacher;
    readonly courseId: number;
    private studentsList: Student[] = [];
    
    constructor(name: string, teacher: Teacher) {
        super();
        this.courseId = Course.generateId();
        this.name = name;
        this.teacher = teacher;
        this.validate();
    }
    
    get id() {
        return this.courseId;
    }
    
    get students() {
        return [...this.studentsList];
    }
    
    private static generateId(): number {
        return Course.currentId++;
    }
    
    addStudent(newStudent: Student[]): number {
        newStudent.forEach((student) => {
            if (this.studentsList.some((s: Student) => s.id === student.id)) {
                throw new Error(`Student with ID ${student.id} already exists.`);
            } else if (!(student.courses).includes(this.id as unknown as Course)) {
                void (Student.isStudent(student) && student.enroll([this]))
            }
            this.studentsList.push(student);
        })
        return this.studentsList.length;
    }
    
    validate(): boolean {
        if (!this.teacher.courses.includes(this.courseId as unknown as Course)) {
            void (Teacher.isTeacher(this.teacher) && this.teacher.addCourse([this]))
        }
        return (this.name.trim() !== '');
    }
    
    removeStudent(studentInstance: Student[]): number {
        studentInstance.forEach((student) => {
            if (!Student.isStudent(student)) return;
            const {id: studentId} = student;
            
            const studentIndex = this.students.findIndex(s => s.id === studentId);
            this.students.splice(studentIndex, 1);
        })
        return this.students.length
        
    }
}
