import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Po } from '../Po.class';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-po',
  templateUrl: './vendor-po.component.html',
  styleUrls: ['./vendor-po.component.css']
})
export class VendorPoComponent implements OnInit {

  pageTitle: string = "-- Vendor PO --";
  vend!: Vendor;
  po!: Po;

  constructor(
    private route: ActivatedRoute,
    private vendsvc: VendorService,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vend = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.vendsvc.getPo(id).subscribe({
      next: (res) => {
        console.debug("Po:", res);
        this.po = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}
