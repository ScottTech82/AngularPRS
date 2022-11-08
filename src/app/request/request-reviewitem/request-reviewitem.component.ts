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

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
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

}
