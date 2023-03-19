import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page.component";
import {UserManagementComponent} from "./component/user-management/user-management.component";
import {CourseManagementComponent} from "./component/course-management/course-management.component";
import {RoleComponent} from "./component/role/role.component";
import {CombinedCourseComponent} from "./component/combined-course/combined-course.component";
import {CourseComponent} from "./component/course/course.component";
import {LessonComponent} from "./component/lesson/lesson.component";

const routes: Routes = [
  {
    path: '',component: LandingPageComponent,
    children:[
      {path:'user-management', component: UserManagementComponent},
      {
        path:'',
        redirectTo: 'user-management',
        pathMatch: 'full'
      },
      {
        path:'course-management', component: CourseManagementComponent,
        children: [
          {path: 'combined-course', component:CombinedCourseComponent},
          {
            path:'',
            redirectTo: 'combined-course',
            pathMatch: 'full'
          },
          {path:'course', component: CourseComponent},
          {path: 'lesson', component: LessonComponent}
        ]
      },
      {path:'role', component: RoleComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
