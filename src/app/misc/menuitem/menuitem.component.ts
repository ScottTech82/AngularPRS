import { Component, Input, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Menu } from '../menu/menu.class';

@Component({
  selector: 'prs-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  
  @Input() menu!: Menu;

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {

  }

}
