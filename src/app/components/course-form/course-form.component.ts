import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private courseService: CourseService,
    private router: Router) {

  }

  onSubmit() {
    if (this.courseForm.valid) {
      let course: Course = this.courseForm.value;
      this.courseService.addCourse(course).subscribe(responseStatus => {
        alert(JSON.stringify(responseStatus.statusMsg))  // 🍎🍎🍎🍎🍎🍎🍎🍎
      });
      this.courseForm.reset();
      // this.router.navigate(["/course-list"]);
    }
  }

  getAllCourse() {
    this.router.navigate(["/course-list"]);
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      courseFee: ['', [Validators.required, Validators.min(0)]]
    })
  }
}
