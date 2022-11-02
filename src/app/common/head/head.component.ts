import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prs-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Input() pageTitle: string = "Josh Scott - PRS";

  constructor() { }

  ngOnInit(): void {
  }

}
