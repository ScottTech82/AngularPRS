import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuitemComponent } from './misc/menuitem/menuitem.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    E404Component,
    MenuComponent,
    AboutComponent,
    MenuitemComponent,
    UserListComponent,
    UserLoginComponent,
    UserDetailComponent,
    UserChangeComponent,
    UserCreateComponent,
    HeadComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
