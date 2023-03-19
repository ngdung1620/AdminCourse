import { Component, OnInit } from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LandingPageService} from "../../services/landing-page.service";
import {Role} from "../../models/role";
@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {
  dataForm !: FormGroup;
  constructor(private dialogRef: DialogRef<DialogUserComponent>, private fb: FormBuilder, private landingPageServices: LandingPageService) { }
  listRole: Role[] = [];
  ngOnInit(): void {
    this.dataForm = this.fb.group({
      userName: [''],
      password: [''],
      email: [''],
      phoneNumber: [''],
      fullName: [''],
      confirmPassword: [''],
      roles: new FormArray([])
    })
    this.landingPageServices.getListRole().subscribe(res => {
      this.listRole = res;
      console.log(this.listRole)
    })
  }

  handleSubmit() {
    if(this.dataForm.value.password != this.dataForm.value.confirmPassword) {
      alert("Mật khẩu không khớp !");
      return;
    }
    this.landingPageServices.register(this.dataForm.value).subscribe(res => {
      this.dialogRef.close();
    })
  }

  onCheckboxChange(event: any) {
    const roles = (this.dataForm.controls['roles'] as FormArray);
    if (event.target.checked) {
      roles.push(new FormControl(event.target.value));
    } else {
      const index = roles.controls
        .findIndex(x => x.value === event.target.value);
      roles.removeAt(index);
    }
  }
}
