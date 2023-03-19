import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";
import {LoginService} from "../login/services/login.service";
import {User} from "./models/user";
import {LandingPageService} from "./services/landing-page.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isOpen = true;
  isFuncAvatar = false;
  user: User = {
    id : '',
    userName : '',
    email : '',
    phoneNumber : '',
    fullName : ''
  };
  constructor(private router: Router, private loginService: LoginService, private landingPageService: LandingPageService) { }
  ngOnInit(): void {
   const tokenObj = this.loginService.token();
   const userId = tokenObj['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
   this.landingPageService.GetUserById(userId).subscribe(res => {
     this.user = res;
   })
  }

  handleClick() {
    this.isFuncAvatar = !this.isFuncAvatar;
  }

  handleLogout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
