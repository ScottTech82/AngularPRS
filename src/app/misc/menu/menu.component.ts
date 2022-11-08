import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Menu } from './menu.class';

@Component({
  selector: 'prs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("About", "/about"),
    new Menu("Login", "/user/login")
 
  ];

  user!: User;

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.user = this.sys.user;
  }

}
