import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { User } from 'src/app/user/user.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  pageTitle: string = "-- Request Lines --";
  req!: Request;
  admin!: User;
  
  constructor(
    private reqlnsvc: RequestLineService,
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private router: Router,
    private sys: SystemService
    
    ) { }

    submitReview(): void {
      this.req.rejectionReason = "";
      this.reqsvc.review(this.req).subscribe({
        next: (res) => {
          console.debug("Request reviewed");
          this.refresh();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    reqlnDelete(id: number): void {

      this.reqlnsvc.remove(id).subscribe({
        next: (res) => {
          console.debug("RequestLine Deleted");
          this.refresh();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    refresh(): void {
      let id = +this.route.snapshot.params["id"];
      this.reqsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Request:", res);
          this.req = res;
          console.debug("Reqreqln:", this.req.requestLines);
         
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
    
    ngOnInit(): void {
      this.sys.chkLogin();
      this.refresh();
      this.admin = this.sys.user;
    }


}
