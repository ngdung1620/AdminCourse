import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Course} from "../../models/Course";
import {LandingPageService} from "../../services/landing-page.service";
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-lesson',
  templateUrl: './dialog-lesson.component.html',
  styleUrls: ['./dialog-lesson.component.scss']
})
export class DialogLessonComponent implements OnInit {

  constructor( private fb: FormBuilder,
               @Inject(MAT_DIALOG_DATA) public editData:any,
               private landingPageService : LandingPageService,
               private dialogRef: DialogRef<DialogLessonComponent>) { }
  dataForm!: FormGroup;
  listCourse: Course[] = [];
  title = 'Thêm bài học'
  ngOnInit(): void {
    this.dataForm = this.fb.group({
      id : [''],
      courseId: [''],
      title: [''],
      description: [''],
      video:['']
    });
    this.landingPageService.getListCourse().subscribe(res => {
      this.listCourse = res;
    })
    if(this.editData) {
      this.title = "Sửa bài học"
      this.dataForm.controls['courseId'].setValue(this.editData.courseId);
      this.dataForm.controls['title'].setValue(this.editData.title);
      this.dataForm.controls['description'].setValue(this.editData.description);
      this.dataForm.controls['video'].setValue(this.editData.video);
      this.dataForm.controls['id'].setValue(this.editData.id);
    }

  }

  handleSubmit() {
   if (!this.editData){
     this.landingPageService.createLesson(this.dataForm.value).subscribe(res => {
       this.dialogRef.close();
     })
   }else {
      this.landingPageService.editLesson(this.dataForm.value).subscribe(res => {
        this.dataForm.reset();
        this.dialogRef.close();
      })
   }
  }
}
