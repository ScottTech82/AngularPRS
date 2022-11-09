import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-reviewitem',
  templateUrl: './request-reviewitem.component.html',
  styleUrls: ['./request-reviewitem.component.css']
})
export class RequestReviewitemComponent implements OnInit {

  pageTitle: string = "-- Request Review --";
  req!: Request;
  reqln: RequestLine[] = [];
  showVerifyReject: boolean = false;
  message: string = "";
  


  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  approve(): void {
    this.reqsvc.approveReview(this.req).subscribe({
      next: (res) => {
        console.debug("Review Approved");
        this.req = res;
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  reject(): void {
    this.showVerifyReject = !this.showVerifyReject;

  }

  verifyReject(): void {
   // if(this.rejectInput === true) {
      
      this.reqsvc.rejectReview(this.req).subscribe({
          next: (res) => {
           console.debug("Review Rejected!");
           this.req = res;
           this.showVerifyReject = false;
           this.refresh();
         },
         error: (err) => {
           console.error(err);
         }
       
     });
    //}
    //else {
      //this.message = "Please enter a Rejection Reason!";
      //this.reject();
    //}

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
    this.refresh();
  }

}
