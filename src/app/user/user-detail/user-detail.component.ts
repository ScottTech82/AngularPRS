import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    pageTitle: string = "-- User Details --";
    user!: User;
    DetailPage: boolean = true;
    showVerifButton: boolean = false;

  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute  
  ) { }

  remove(): void {
    this.showVerifButton = !this.showVerifButton;
  }

  verifyDeletion(): void {
 
    this.usersvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("The User was deleted!");
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
        console.debug("User:", res);
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
