import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "./core/authentication.guard";
import {UnauthorizedComponent} from "./core/component/unauthorized/unauthorized.component";
import {NgxPermissionsGuard} from "ngx-permissions";
import {NotFoundComponent} from "./core/component/not-found/not-found.component";

const routes: Routes = [
  {
    path: "unauthorized", component: UnauthorizedComponent
  },
  {
    path: '',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule),
    canActivate: [AuthenticationGuard, NgxPermissionsGuard],
    data: {
      permissions: {
        only: ["Admin"],
        redirectTo: '/unauthorized'
      }
    },
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
