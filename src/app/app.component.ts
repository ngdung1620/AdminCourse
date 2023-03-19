import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";
import {LoginService} from "./login/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webAdmin';

  constructor(private route: Router, private permissionService: NgxPermissionsService, private loginService: LoginService) {

  }

  ngOnInit(): void {

  }

}
