import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CombinedCourse} from "../../models/combined-course";
import {LandingPageService} from "../../services/landing-page.service";
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-course-management',
  templateUrl: './dialog-course-management.component.html',
  styleUrls: ['./dialog-course-management.component.scss']
})
export class DialogCourseManagementComponent implements OnInit {
  dataForm!: FormGroup;
  listCombinedCourse: CombinedCourse[] = [];
  listCombinedCourseChecked: string[] =[];
  title = "Thêm khóa học";
  constructor(private fb: FormBuilder, private landingPageService: LandingPageService,
              @Inject(MAT_DIALOG_DATA) public editData:any,
              private dialogRef: DialogRef<DialogCourseManagementComponent>) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      imageUrl:[''],
      combinedCoursesId: new FormArray([])
    });
    this.landingPageService.getListCombinedCourse().subscribe(res => {
      this.listCombinedCourse = res;
    })
    if(this.editData){
      this.title = "Sửa khóa học"
      this.dataForm.controls['title'].setValue(this.editData.title);
      this.dataForm.controls['id'].setValue(this.editData.id);
      this.dataForm.controls['description'].setValue(this.editData.description);
      this.dataForm.controls['imageUrl'].setValue(this.editData.imageUrl);
      for (let cb of this.editData.combinedCourses) {
        this.listCombinedCourseChecked.push(cb.id);
      }
      const combinedCoursesId = (this.dataForm.controls['combinedCoursesId'] as FormArray);
      this.listCombinedCourseChecked.forEach(x => {
        combinedCoursesId.push(new FormControl(x));
      })
    }

  }

  handleSubmit() {
    if(!this.editData){
      this.landingPageService.createCourse(this.dataForm.value).subscribe(res => {
        this.dialogRef.close();
      })
    } else {
      this.landingPageService.editCourse(this.dataForm.value).subscribe(res =>{
        this.dataForm.reset();
        this.dialogRef.close();
      })
    }
  }

  onCheckboxChange(event: any) {
    const combinedCoursesId = (this.dataForm.controls['combinedCoursesId'] as FormArray);
    if (event.target.checked) {
      combinedCoursesId.push(new FormControl(event.target.value));
    } else {
      const index = combinedCoursesId.controls
        .findIndex(x => x.value === event.target.value);
      combinedCoursesId.removeAt(index);
    }
  }

  isCheckbox(id: string){
    for (let cb of this.listCombinedCourseChecked) {
      if(cb === id) {
        return true;
      }
    }
    return false;
  }
}
