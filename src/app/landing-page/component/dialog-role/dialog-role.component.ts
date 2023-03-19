import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LandingPageService} from "../../services/landing-page.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-dialog-role',
  templateUrl: './dialog-role.component.html',
  styleUrls: ['./dialog-role.component.scss']
})
export class DialogRoleComponent implements OnInit {
  dataForm!: FormGroup;

  constructor(private fb: FormBuilder, private landingPageService: LandingPageService,  private dialogRef: DialogRef<DialogRoleComponent>) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      name: ['']
    })
  }

  handleSubmit() {
    this.landingPageService.createRole(this.dataForm.value).subscribe(res =>{
    this.dialogRef.close();
      console.log(res);
    })
  }
}
