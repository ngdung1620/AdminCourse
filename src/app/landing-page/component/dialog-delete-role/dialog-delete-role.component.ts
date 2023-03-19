import { Component, OnInit } from '@angular/core';
import {LandingPageService} from "../../services/landing-page.service";
import {Role} from "../../models/role";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-dialog-delete-role',
  templateUrl: './dialog-delete-role.component.html',
  styleUrls: ['./dialog-delete-role.component.scss']
})
export class DialogDeleteRoleComponent implements OnInit {

  constructor(private landingPageService: LandingPageService, private fb: FormBuilder, private dialogRef: DialogRef) { }
  listRole: Role[] = [];
  dataForm!: FormGroup;
  ngOnInit(): void {
    this.landingPageService.getListRole().subscribe(res => {
      this.listRole = res
    })
    this.dataForm = this.fb.group({
        id: ['']
    })
  }

  handleSubmit() {
  if(confirm("Bạn có chắc chắn muốn xóa ?")){
    this.landingPageService.deleteRole(this.dataForm.value.id).subscribe(res =>{
      this.dialogRef.close();
    })
  }
  }
}
