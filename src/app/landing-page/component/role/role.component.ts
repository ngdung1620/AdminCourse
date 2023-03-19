import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LandingPageService} from "../../services/landing-page.service";
import {Role} from "../../models/role";
import {Claim} from "../../models/claim";
import {GetClaimByRoleId} from "../../models/GetClaimByRoleId";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {AddClaimRequest} from "../../models/addClaimRequest";
import {DialogRoleComponent} from "../dialog-role/dialog-role.component";
import {DialogDeleteRoleComponent} from "../dialog-delete-role/dialog-delete-role.component";
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  isOpen = true;
  constructor(public dialog: MatDialog, public landingPageService: LandingPageService) { }
  listRole: Role[] = [];
  listClaim: Claim[] =[]
  indexPermission = '';
  listPermissionChecked: string[] = [];
  ngOnInit(): void {
    this.landingPageService.getListRole().subscribe(res => {
      this.listRole = res;
      this.indexPermission = this.listRole[0].id
      this.callDataInnit(this.listRole[0].id)
    });
    this.landingPageService.getListClaim().subscribe(res => {
      this.listClaim = res;
    })
  }
  callDataInnit(id: string) {
    let roleId: GetClaimByRoleId = {
      roleId: id
    }
    this.landingPageService.getClaimByRoleId(roleId).subscribe(res =>{
      this.listPermissionChecked = [];
     res.claims.forEach(c => {
       this.listPermissionChecked.push(c)
     })
    })
  }
  handleClick(id: string) {
    this.callDataInnit(id);
    this.indexPermission = id;
  }



  handleChange($event: MatCheckboxChange) {
    if ($event.checked){
        this.listPermissionChecked.push($event.source.value);
    }else {
      const index = this.listPermissionChecked
        .findIndex(x => x === $event.source.value);
      this.listPermissionChecked.splice(index,1);
    }
  }
  isCheckbox(name: string) {
    for (let permission of this.listPermissionChecked) {
      if(permission === name) {
        return true;
      }
    }
    return false;
  }

  handleSave() {
    let listPermission: AddClaimRequest ={
      listPermission: this.listPermissionChecked
    }
    this.landingPageService.addClaim(this.indexPermission,listPermission).subscribe(res => {
     alert("Lưu thành công")
    })
  }

  openDialog() {
    this.dialog.open(DialogRoleComponent,{
      width: '30%',
    }).afterClosed().subscribe(res => {
      this.landingPageService.getListRole().subscribe(res => {
        this.listRole = res;
      });
    })
  }

  handleDelete() {
    this.dialog.open(DialogDeleteRoleComponent, {
      width: "30%"
    }).afterClosed().subscribe(res => {
      this.landingPageService.getListRole().subscribe(res => {
        this.listRole = res;
      });
    })
  }
}
