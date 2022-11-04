import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "-- Product Details --";
  DetailPage: boolean = true;
  prod!: Product;
  verifyRemoveButton: boolean = false;
  vend: Vendor[] = [];

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  remove(): void {
    this.verifyRemoveButton = !this.verifyRemoveButton;
  }

  verifyRemove(): void {
    this.prodsvc.remove(this.prod.id).subscribe({
      next: (res) => {
        console.debug("Product deleted");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.prod = res;
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
