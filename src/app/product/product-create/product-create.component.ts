import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string = "-- Create New Product --";
  DetailPage: boolean = false;
  prod: Product = new Product;
  vendor: Vendor[] = [];

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private router: Router
  ) { }

  create(): void{
    this.prodsvc.create(this.prod).subscribe({
      next: (res) => {
        console.debug("Product created");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
