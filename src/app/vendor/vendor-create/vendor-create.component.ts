import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  pageTitle: string = "-- Create New Vendor --"
  vend: Vendor = new Vendor;
  DetailPage: boolean = false;

  constructor(
    private vendsvc: VendorService,
    private router: Router
  ) { }

  create(): void {
    this.vendsvc.create(this.vend).subscribe({
      next: (res) => {
        console.debug("Vendor created.");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
  }

}
