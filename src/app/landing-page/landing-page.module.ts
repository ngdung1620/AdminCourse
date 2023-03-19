import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { UserManagementComponent } from './component/user-management/user-management.component';
import { CourseManagementComponent } from './component/course-management/course-management.component';
import { RoleComponent } from './component/role/role.component';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { DialogUserComponent } from './component/dialog-user/dialog-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CombinedCourseComponent } from './component/combined-course/combined-course.component';
import { CourseComponent } from './component/course/course.component';
import { LessonComponent } from './component/lesson/lesson.component';
import {NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";
import { DialogCombinedCourseComponent } from './component/dialog-combined-course/dialog-combined-course.component';
import { DialogCourseManagementComponent } from './component/dialog-course-management/dialog-course-management.component';
import { DialogLessonComponent } from './component/dialog-lesson/dialog-lesson.component';
import { DialogRoleComponent } from './component/dialog-role/dialog-role.component';
import { DialogDeleteRoleComponent } from './component/dialog-delete-role/dialog-delete-role.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    LandingPageComponent,
    UserManagementComponent,
    CourseManagementComponent,
    RoleComponent,
    DialogUserComponent,
    CombinedCourseComponent,
    CourseComponent,
    LessonComponent,
    DialogCombinedCourseComponent,
    DialogCourseManagementComponent,
    DialogLessonComponent,
    DialogRoleComponent,
    DialogDeleteRoleComponent
  ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatDialogModule,
        ReactiveFormsModule,
        NgMaterialMultilevelMenuModule,
        MatPaginatorModule,
        FormsModule,
    ]
})
export class LandingPageModule { }
