import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogUserComponent} from "../dialog-user/dialog-user.component";
import {LandingPageService} from "../../services/landing-page.service";
import {User} from "../../models/user";
import {CourseRequest} from "../../models/courseRequest";
import {ListUserRequest} from "../../models/ListUserRequest";
import {PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog, private landingPageService: LandingPageService) { }
  listUser: User[] = []
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  search = '';
  pageCurrent = 1;
  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    let data: ListUserRequest = {
      search: this.search,
      pageIndex: this.pageCurrent,
      pageSize: this.pageSize
    };
    this.landingPageService.ListUser(data).subscribe(res => {
      this.listUser = res.listUser
      this.length = res.totalRecords
    })
  }
  openDialog() {
    this.dialog.open(DialogUserComponent, {
      width: '30%'
    }).afterClosed().subscribe(res => {
      this.getUser();
    });
  }

  handleDelete(id: string) {
   if(confirm("Bạn có chắc chắn muốn xóa ?")){
     this.landingPageService.deleteUser(id).subscribe(res => {
       this.getUser()
     })
   }
  }

  change(event: PageEvent) {
    let data: ListUserRequest = {
      search: this.search,
      pageIndex: (event.pageIndex + 1),
      pageSize: event.pageSize
    };
    this.landingPageService.ListUser(data).subscribe(res => {
      this.listUser = res.listUser;
    })
    this.pageCurrent = event.pageIndex + 1
  }

  handleSearch() {
    let data: ListUserRequest = {
      search: this.search,
      pageIndex: 1,
      pageSize: this.pageSize
    };
    this.landingPageService.ListUser(data).subscribe(res => {
      this.listUser = res.listUser;
      this.length = res.totalRecords
    })
  }
}
