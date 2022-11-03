import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {


  pageTitle: string = "-- The Vendor List --";
  vend: Vendor[] = [];

  constructor(
    private vendsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vend = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
