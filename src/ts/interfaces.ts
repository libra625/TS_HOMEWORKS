import {GradesType} from "./types";

export interface StudentInterface {
    id: string,
    name: string,
    age: number
}

export interface UniversityRecord {
    students: Record<string, StudentInterface>,
    grades: Record<string, GradesType>,
    
}
