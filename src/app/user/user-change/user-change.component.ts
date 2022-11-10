import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent implements OnInit {

  pageTitle: string = "-- User Update --"
  user: User = new User;
  DetailPage: boolean = false;
  
  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private sys: SystemService

  ) { }

  save(): void {
    this.usersvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("User updated.");
        this.router.navigateByUrl("/user/list");
        },
      error: (err) => {
          console.error(err);
        }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:",res);
        this.user = res;
      },
      error: (err) => {
        if(err.status === 404) {
          this.router.navigateByUrl("/misc/e404");
        }
        else {
          console.error(err);
        }
      }
    });
  }

}
