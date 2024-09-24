import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/courses'; 
  private courses : Course[]=[];
  
  constructor(private http: HttpClient){
    // let currentCoursesFromDb = this.http.get<Course[]>(`${this.apiUrl}/get-all`);
    // this.courses = currentCoursesFromDb?JSON.parse(currentCoursesFromDb):[];
  }

  addCourse(course: Course): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-course`, course);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/get-all`);
  }
}