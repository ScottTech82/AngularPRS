import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  message: string = "";


  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private router: Router

  ) { }

  login(): void {
    this.sys.user = null;
    this.usersvc.login(this.email, this.password).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.sys.user = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "The Email or Password provided does not match!"
        }
        else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
