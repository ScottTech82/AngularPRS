import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { UserLoginComponent } from 'src/app/user/user-login/user-login.component';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  pageTitle: string = "-- Create New Request --";
  DetailPage: boolean = false;
  req: Request = new Request;
  user!: User;
  
  

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private sys: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute
  
  ) { }

  create(): void {
    let id = this.sys.user.id;
    this.req.userId = id;
    this.reqsvc.create(this.req).subscribe({
      next: (res) => {
        console.debug("Request Created.");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });

  }
  ngOnInit(): void {
    this.sys.chkLogin();
    console.debug("Login:", this.sys.user);
    this.user = this.sys.user;
    console.debug("user:", this.user);
  }

}
