import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent implements OnInit {

  reqln!: RequestLine;
  prod: Product[] = [];
  pageTitle: string = "-- RequestLine Update --";
  DetailPage: boolean = false;

  constructor(
    private reqlnsvc: RequestLineService,
    private prodsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  update(): void {
    this.reqlnsvc.change(this.reqln).subscribe({
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
    this.reqlnsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.reqln = res;
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
