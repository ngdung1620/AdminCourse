import { Component, OnInit } from '@angular/core';
import {LandingPageService} from "../../services/landing-page.service";
import {Lesson} from "../../models/lesson";
import {MatDialog} from "@angular/material/dialog";
import {DialogCombinedCourseComponent} from "../dialog-combined-course/dialog-combined-course.component";
import {DialogLessonComponent} from "../dialog-lesson/dialog-lesson.component";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  listLesson: Lesson[] = [];
  constructor(private landingPageService: LandingPageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListLesson();
  }
  getListLesson() {
    this.landingPageService.getListLesson().subscribe(res => {
      this.listLesson = res;
    })
  }

  handleDelete(id: string) {
    if(confirm("Bạn có chắc chắn muốn xóa ?")){
      this.landingPageService.deleteLesson(id).subscribe(res => {
        this.getListLesson();
      })
    }
  }

  handleAdd() {
    this.dialog.open(DialogLessonComponent,{
      width: "30%"
    }).afterClosed().subscribe(res => {
      this.getListLesson();
    });
  }

  handleEdit(lesson: Lesson) {
    this.dialog.open(DialogLessonComponent,{
      width: "30%",
      data: lesson
    }).afterClosed().subscribe(res => {
      this.getListLesson();
    });
  }
}
