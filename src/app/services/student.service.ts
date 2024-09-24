import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudent(student: Student): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-student`, student);
  }

  private apiUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) { }
  
  findNthStudentByEnrollmentDateWithHighestPendingFee(n: number, date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${n}/nth-highest-pending-fee?date=${date}`);
  }

  findStudentsWithNoFeesInLastYearAndMultipleCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lastyear-no-fee-multiple-courses`);
  }

  getAverageFeeCollectedPerStudentPerBatch(): Observable<any> {
    return this.http.get(`${this.apiUrl}/avg-fees`);
  }

  findTop5StudentsWithLongestDelinquentPaymentHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-5-longest-delinquent-payment`);
  }

  findStudentsEnrolledInAllCoursesButNotPaidFees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/enrolled-in-all-courses-not-paid`);
  }
}
