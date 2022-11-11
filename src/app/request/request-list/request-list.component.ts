import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle: string = "-- Request List --";
  req: Request[] = [];
  admin!: User;
  searchCrit: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService
  ) { }

  sortBy(column: string): void {
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc; //flip the sorting if already sorting.
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.admin = this.sys.user;
    if(this.admin.isAdmin === true || this.admin.isReviewer === true) {
      this.reqsvc.list().subscribe({
        next: (res) => {
          console.debug("Requests:", res);
          this.req = res;
          for(let x of this.req) {
            x.UserName = x.user.username;
          }
        },
        error: (err) => {
          console.error(err);
        }
      });
    } 
    else {
      this.reqsvc.list().subscribe({
        next: (res) => {
          for(let r of res) {
            if(r.userId === this.admin.id) {
              this.req.push(r);
              console.debug("Requests:", this.req);
              for(let x of this.req) {
                x.UserName = x.user.username;
              }
            }
          }
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
     


    /* --prior code in case above doesnt work.
    this.sys.chkLogin();
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.admin = this.sys.user;
    */
  }
  
}
