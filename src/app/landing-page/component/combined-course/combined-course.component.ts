import { Component, OnInit } from '@angular/core';
import {CombinedCourse} from "../../models/combined-course";
import {LandingPageService} from "../../services/landing-page.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogCombinedCourseComponent} from "../dialog-combined-course/dialog-combined-course.component";

@Component({
  selector: 'app-combined-course',
  templateUrl: './combined-course.component.html',
  styleUrls: ['./combined-course.component.scss']
})
export class CombinedCourseComponent implements OnInit {
  listCombinedCourse: CombinedCourse[] = [];
  constructor(private landingPageService: LandingPageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListCombinedCourse();
  }
  getListCombinedCourse(){
    this.landingPageService.getListCombinedCourse().subscribe(res => {
      this.listCombinedCourse = res;
    })
  }
  handleDelete(id: string) {
    if(confirm("Bạn có chắc chắn muốn xóa")){
      this.landingPageService.deleteCombinedCourse(id).subscribe(res => {
        this.getListCombinedCourse();
      });
    }
  }

  handleAdd() {
    this.dialog.open(DialogCombinedCourseComponent,{
      width: "30%"
    }).afterClosed().subscribe(res => {
      this.getListCombinedCourse();
    });
  }

  handleEdit(combinedCourse: CombinedCourse) {
    this.dialog.open(DialogCombinedCourseComponent,{
      width: "30%",
      data: combinedCourse
    }).afterClosed().subscribe(res =>{
      this.getListCombinedCourse();
    })
  }
}
