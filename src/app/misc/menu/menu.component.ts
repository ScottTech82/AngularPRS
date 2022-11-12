import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { User } from 'src/app/user/user.class';
import { Menu } from './menu.class';

@Component({
  selector: 'prs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
/* --was attempting to read the reviews and display in menu showing the reviews to complete number--
  req!: Request[];
  r!: number;
*/ 
  
  menus: Menu[] = [
    
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vendor/list"),
    new Menu("Products", "/product/list"),
    new Menu("Requests", "/request/list"),
    /* new Menu(`Reviews (${this.r})`, "/request/reviews"), */
    new Menu("Reviews", "/request/reviews"),
    new Menu("About", "/about"),
    new Menu("  -- Logout --  ", "/user/login")
 
  ];

  user!: User;


  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.user = this.sys.user;
    /*
    if(this.sys.user.isReviewer === true) { 
      this.reqsvc.getReviews(this.sys.user.id).subscribe({
        next: (res) => {
          console.debug("Reviews:", res);
          console.debug("SysUserId:", this.sys.user.id);
          this.req = res;
          this.r = this.req.length;
          console.debug("R's", this.r);
        },
        error: (err) => {
          console.error(err);
        }
      });
     }
     */
     
  }

}
