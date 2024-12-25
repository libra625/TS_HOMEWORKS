import {StudentInterface, UniversityRecord} from "./interfaces";
import {GradesType, SubjectType} from "./types";

const student1: StudentInterface = {
    id: '1',
    name: 'Alice',
    age: 20
}

const student2: StudentInterface = {
    id: '2',
    name: 'Bob',
    age: 21
}

const student3: StudentInterface = {
    id: '3',
    name: 'Bravo-Charlie',
    age: 19
}

const grades1: GradesType = {
    'Math': 90,
    'Science': 100,
    'Literature': 100,
    'History': 85,
}

const grades2: GradesType = {
    'Math': 60,
    'Science': 65,
    'Literature': 75,
    'History': 66,
}
const grades3: GradesType = {
    'Math': 0,
    'Science': 65,
    'Literature': 70,
    'History': 60,
}

const universityRecord: UniversityRecord = {
    students: {
        '1': student1,
        '2': student2,
        '3': student3,
    },
    grades: {
        '1': grades1,
        '2': grades2,
        '3': grades3,
    }
}

console.log(universityRecord)

const getStudentGrades = (universityRecord: UniversityRecord, studentId: string): GradesType => {
    return universityRecord.grades[studentId];
}

console.log("\n\n\n\n\t Student1:");
console.log(getStudentGrades(universityRecord, "1"));

const getAverageGrade = (universityRecord: UniversityRecord, subject: SubjectType): number => {
    let totalGrade: number = 0;
    let studentCount: number = 0;
    
    for (const studentId in universityRecord.grades) {
        const studentGrades = universityRecord.grades[studentId];
        if (studentGrades[subject] !== undefined) {
            totalGrade += studentGrades[subject];
            studentCount++;
        }
    }
    
    return Math.ceil(totalGrade / studentCount);
}

console.log("\n\n\t AVG GRADE for MATH: \n");
console.log(getAverageGrade(universityRecord, "Math"));

console.log("\n\n\t AVG GRADE for Science: \n");
console.log(getAverageGrade(universityRecord, "Science"));
