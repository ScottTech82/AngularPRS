import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  pageTitle: string = "-- Request Details --";
  DetailPage: boolean = true;
  req!: Request;
  verifyRemoveButton: boolean = false;
  admin!: User;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
    
  ) { }

  remove(): void {
    this.verifyRemoveButton = !this.verifyRemoveButton;
  }

  verifyRemove(): void {
    this.reqsvc.remove(this.req.id).subscribe({
      next: (res) => {
        console.debug("Request deleted");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.req = res;
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
    this.admin = this.sys.user;
  }
}
