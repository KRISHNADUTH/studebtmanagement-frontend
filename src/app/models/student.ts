import { Course } from "./course";

export interface Student {
    name: string;
    userId: string;
    enrollmentDate: string;  // This will be a string in ISO 8601 format (YYYY-MM-DD)
    courses: Course[];
    pendingFee: number;
}
