import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LandingPageService} from "../../services/landing-page.service";
import {Course} from "../../models/Course";
import {CreateCombinedCourseRequest} from "../../models/createCombinedCourseRequest";
import {DialogRef,} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-combined-course',
  templateUrl: './dialog-combined-course.component.html',
  styleUrls: ['./dialog-combined-course.component.scss']
})
export class DialogCombinedCourseComponent implements OnInit {
    listCourse: Course[] = [];
  constructor( private fb: FormBuilder,
               private landingPageService: LandingPageService,
               @Inject(MAT_DIALOG_DATA) public editData:any,
               private dialogRef: DialogRef<DialogCombinedCourseComponent>
              ) { }
  dataForm!: FormGroup;
  listCourseChecked: string[] = [];
  title = "Thêm nhóm khóa học"
  ngOnInit(): void {
    this.dataForm = this.fb.group({
      id: [''],
      title: [''],
      courses: new FormArray([])
    });
    this.landingPageService.getListCourse().subscribe(res=> {
      this.listCourse = res;
    })
    if(this.editData) {
      this.title = "Sửa nhóm khóa học"
      this.dataForm.controls['title'].setValue(this.editData.title);
      this.dataForm.controls['id'].setValue(this.editData.id);
      for (let course of this.editData.courses) {
        this.listCourseChecked.push(course.id);
      }
      const courses = (this.dataForm.controls['courses'] as FormArray);
      this.listCourseChecked.forEach(x => {
        courses.push(new FormControl(x));
      })
    }

  }


  onCheckboxChange(event: any) {
    const courses = (this.dataForm.controls['courses'] as FormArray);
    if (event.target.checked) {
      courses.push(new FormControl(event.target.value));
    } else {
      const index = courses.controls
        .findIndex(x => x.value === event.target.value);
      courses.removeAt(index);
    }
  }

  handleSubmit() {
   if(!this.editData){
     const data: CreateCombinedCourseRequest = this.dataForm.value;
     this.landingPageService.createCombinedCourse(data).subscribe(res => {
       this.dialogRef.close();
     })
   } else {
     this.landingPageService.editCombinedCourse(this.dataForm.value).subscribe(res => {
       this.dataForm.reset();
       this.dialogRef.close();
     })
   }

  }

  isCheckbox(id: string) {
    for (let coursesId of this.listCourseChecked) {
      if(coursesId === id) {
        return true;
      }
    }
    return false;
  }
}
