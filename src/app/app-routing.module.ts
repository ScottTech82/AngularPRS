import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { E404Component } from './misc/e404/e404.component';
import { AboutComponent } from './misc/about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  
  
  {path: "user/login", component: UserLoginComponent},
  {path: "user/list", component: UserListComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/change/:id", component: UserChangeComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  
  
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
