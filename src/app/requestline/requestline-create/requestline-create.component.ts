import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  reqln: RequestLine = new RequestLine;
  prod: Product[] = [];
  pageTitle: string = "-- Create RequestLine --";
  DetailPage: boolean = false;

  constructor(
    private reqlnsvc: RequestLineService,
    private prodsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  create(): void {
    
    this.reqlnsvc.create(this.reqln).subscribe({
      next: (res) => {
        console.debug("Reqline Created");
        this.router.navigateByUrl(`/requestline/list/${this.reqln.requestId}`);
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqln.requestId = id;
    console.debug("Passed in?",this.reqln.requestId);

    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.prod = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
