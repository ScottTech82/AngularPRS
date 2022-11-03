import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent implements OnInit {

  pageTitle: string = "-- Update User --"
  user: User = new User;
  DetailPage: boolean = false;
  
  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute

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
