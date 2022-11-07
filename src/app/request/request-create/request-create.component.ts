import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private reqsvc: RequestService,
    private router: Router
  ) { }

  create(): void {
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
  }

}
