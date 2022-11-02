import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'prs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/user/list"),
    new Menu("About", "/about")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
