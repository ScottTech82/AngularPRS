import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent implements OnInit {

  pageTitle: string = "-- Update Vendor --";
  DetailPage: boolean = false;
  vend!: Vendor;

  constructor(
    private vendsvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  update(): void {
    this.vendsvc.change(this.vend).subscribe({
      next: (res) => {
        console.debug("Vendor updated.");
        this.router.navigateByUrl("/vendor/list");
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
    let id = +this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:",res);
        this.vend = res;
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
