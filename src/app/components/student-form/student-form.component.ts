import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;

  // Available courses
  availableCourses = [
    { courseName: 'Java', courseFee: 6000 },
    { courseName: 'Python', courseFee: 4000 },
    { courseName: 'HTML', courseFee: 3000 },
    { courseName: 'Rust', courseFee: 3000 }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      userId: ['', [Validators.required, Validators.minLength(3)]],
      enrollmentDate: ['', Validators.required],
      courses: this.formBuilder.array([])  // Initialize the courses array
    });
  }

  ngOnInit(): void {
    this.addCourseCheckboxes();
  }

  // Dynamically add course checkboxes to the form
  addCourseCheckboxes() {
    const courseArray = this.studentForm.get('courses') as FormArray;
    this.availableCourses.forEach(course => {
      courseArray.push(this.formBuilder.group({
        selected: [false],   // Whether the course is selected
        feePaid: [false],    // Whether the fee is paid
        courseName: [course.courseName],
        courseFee: [course.courseFee]
      }));
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;

      // Filter out unselected courses
      const selectedCourses = formValue.courses
        .filter((course: any) => course.selected)
        .map((course: any) => ({
          courseName: course.courseName,
          courseFee: course.feePaid ? 0 : course.courseFee
        }));

      // Create final student object
      const student = {
        name: formValue.name,
        userId: formValue.userId,
        enrollmentDate: formValue.enrollmentDate,
        courses: selectedCourses
      };

      alert(JSON.stringify(student));
      console.log(JSON.stringify(student));

      this.studentForm.reset();
    }
  }
}
