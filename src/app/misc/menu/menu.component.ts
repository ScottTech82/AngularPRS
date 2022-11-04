import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'prs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu("Login", "/user/login"),
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    new Menu("About", "/about")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
