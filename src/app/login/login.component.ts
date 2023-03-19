import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "./services/login.service";
import {LoginRequest} from "./models/loginRequest";
import {Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmit = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router,
              private permissionService: NgxPermissionsService) { }
  dataForm = this.fb.group({
    userName: ['',Validators.required],
    password: ['',Validators.required]
  })
  ngOnInit(): void {
  }

  handleSubmit() {
    if(!this.dataForm.valid){
      this.isSubmit = true;
    }else {
      this.isSubmit = false;
      const data = this.dataForm.value as LoginRequest
      this.loginService.login(data).subscribe( (res:any) => {
        if(res != null){
          this.route.navigate(["/user-management"]);
          sessionStorage.setItem("token",res?.token);
          const tokenObj = this.loginService.token();
          const claims = tokenObj['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          this.permissionService.loadPermissions(claims);
        }
      },error => {
        console.log(error)
        alert('Tài khoản mật khẩu không đúng!!')
      })
    }
  }

}
