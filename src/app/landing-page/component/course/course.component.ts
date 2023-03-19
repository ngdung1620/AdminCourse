import { Component, OnInit } from '@angular/core';
import {LandingPageService} from "../../services/landing-page.service";
import {Course} from "../../models/Course";
import {MatDialog} from "@angular/material/dialog";
import {DialogCombinedCourseComponent} from "../dialog-combined-course/dialog-combined-course.component";
import {DialogCourseManagementComponent} from "../dialog-course-management/dialog-course-management.component";
import {PageEvent} from "@angular/material/paginator";
import {CourseRequest} from "../../models/courseRequest";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  listCourse: Course[] = [];
  constructor(private landingPageService: LandingPageService, private dialog: MatDialog) { }
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  search = '';
  pageCurrent = 1;
  pageIndex = 0;

  ngOnInit(): void {
    this.getListCourse();
  }
  getListCourse() {
    let data: CourseRequest = {
      search: this.search,
      pageIndex: this.pageCurrent,
      pageSize: this.pageSize
    };
    this.landingPageService.listCourse(data).subscribe(res => {
      this.listCourse = res.listCourse;
      this.length = res.totalRecords;
    })
  }

  handleClick(id: string) {
    if(confirm("Bạn có chắc chắn muốn xóa ?")){
      this.landingPageService.deleteCourse(id).subscribe(res => {
        this.getListCourse();
      })
    }
  }

  handleAdd() {
    this.dialog.open(DialogCourseManagementComponent,{
      width: "30%"
    }).afterClosed().subscribe(res => {
      this.search = '';
      this.getListCourse();

    });
  }

  handleEdit(course: Course) {
    this.dialog.open(DialogCourseManagementComponent,{
      width: "30%",
      data: course
    }).afterClosed().subscribe(res => {
      this.getListCourse();
    });
  }

  change(event: PageEvent) {
    let data: CourseRequest = {
      search: this.search,
      pageIndex: (event.pageIndex + 1),
      pageSize: event.pageSize
    };
    this.landingPageService.listCourse(data).subscribe(res => {
      this.listCourse = res.listCourse;
    })
    this.pageCurrent = event.pageIndex + 1;
  }

  handleSearch() {
    let data: CourseRequest = {
      search: this.search,
      pageIndex: 1,
      pageSize: this.pageSize
    };
    this.landingPageService.listCourse(data).subscribe(res => {
      this.listCourse = res.listCourse;
      this.length = res.totalRecords;
      this.pageIndex = (res.pageIndex -1);
      console.log(this.pageIndex)
    })
  }
}
