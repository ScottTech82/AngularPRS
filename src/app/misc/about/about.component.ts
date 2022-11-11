import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle: string = "-- About --";

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
