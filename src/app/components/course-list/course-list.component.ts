import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  availableCourses: Course[] = [];
  loading: boolean = true;  // Add a loading flag

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(availableCoursesFromDb => {
      this.availableCourses = availableCoursesFromDb;
      this.loading = false;  // Set loading to false once data is received
    });
  }


}
