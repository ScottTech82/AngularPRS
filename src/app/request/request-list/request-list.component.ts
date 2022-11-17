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
  rx: Request[] = [];
  createNew: Request[] = [];

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService
  ) { }


  createNewchk(): boolean {
    if(this.createNew.length > 4) {
      return true;
    }
    else {
      return false;
    }
  }




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
    
    for(let r of this.req) {
      if(r.status === "REVIEW" && r.userId === this.admin.id) {
        this.createNew.push(r);
        console.debug("new:", this.createNew);
      }
  }

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
          for(let rs of res) {
            if(rs.userId === this.admin.id) {
              this.rx.push(rs);
              this.req = this.rx;
              /*this.req = res.map();*/
              console.debug("rs", rs);
            }
          }
          console.debug("Requests:", this.req);
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
