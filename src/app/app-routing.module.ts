import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create-student", component: StudentFormComponent },
  { path: "student-list", component: StudentListComponent },
  { path: "create-course", component: CourseFormComponent },
  { path: "course-list", component: CourseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
