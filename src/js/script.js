"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    id: '1',
    name: 'Alice',
    age: 20
};
const student2 = {
    id: '2',
    name: 'Bob',
    age: 21
};
const student3 = {
    id: '3',
    name: 'Bravo-Charlie',
    age: 19
};
const grades1 = {
    'Math': 90,
    'Science': 100,
    'Literature': 100,
    'History': 85,
};
const grades2 = {
    'Math': 60,
    'Science': 65,
    'Literature': 75,
    'History': 66,
};
const grades3 = {
    'Math': 0,
    'Science': 65,
    'Literature': 70,
    'History': 60,
};
const universityRecord = {
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
};
console.log(universityRecord);
const getStudentGrades = (universityRecord, studentId) => {
    return universityRecord.grades[studentId];
};
console.log("\n\n\n\n\t Student1:");
console.log(getStudentGrades(universityRecord, "1"));
const getAverageGrade = (universityRecord, subject) => {
    let totalGrade = 0;
    let studentCount = 0;
    for (const studentId in universityRecord.grades) {
        const studentGrades = universityRecord.grades[studentId];
        if (studentGrades[subject] !== undefined) {
            totalGrade += studentGrades[subject];
            studentCount++;
        }
    }
    return Math.ceil(totalGrade / studentCount);
};
console.log("\n\n\t AVG GRADE for MATH: \n");
console.log(getAverageGrade(universityRecord, "Math"));
console.log("\n\n\t AVG GRADE for Science: \n");
console.log(getAverageGrade(universityRecord, "Science"));
//# sourceMappingURL=script.js.map