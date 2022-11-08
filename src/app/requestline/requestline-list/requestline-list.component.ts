import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  reqln: Requestline[] = [];
  pageTitle: string = "-- Request Lines --";
  req!: Request;
  prod!: Product;

  constructor(
    private reqlnsvc: RequestlineService,
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private prodsvc: ProductService

  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) =>  {
        console.debug("Request:", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  

    this.reqlnsvc.list().subscribe({
      next: (res) => {
        console.debug("Requestlines:", res);
        this.reqln = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

    /*
    let pid = this.reqln.productId;
    this.prodsvc.get().subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.prod = res;
      },
      error: (err) => {
        console.error(err);
      }
    });*/
  }

}
