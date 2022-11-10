import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "-- The Product List --"
  prod: Product[] = [];
  vend!: Vendor;
  admin!: User;
  searchCrit: string = "";

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.prod = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.admin = this.sys.user;
  }

}
