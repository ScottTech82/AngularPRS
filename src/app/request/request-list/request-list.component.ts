import { Component, OnInit } from '@angular/core';
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

  constructor(
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
