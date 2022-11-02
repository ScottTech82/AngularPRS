import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    pageTitle: string = "User Detail";
    user!: User;
    DetailPage: boolean = true;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
