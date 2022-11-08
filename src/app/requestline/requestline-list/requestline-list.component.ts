import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  reqln: RequestLine[] = [];
  pageTitle: string = "-- Request Lines --";
  req!: Request;
  prod: Product[] = [];
  reqlnTBD!: RequestLine;
  
  constructor(
    private reqlnsvc: RequestLineService,
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private prodsvc: ProductService,
    private router: Router
    
    ) { }

    submitReview(): void {
      this.reqsvc.review(this.req).subscribe({
        next: (res) => {
          console.debug("Request reviewed");
          this.refresh();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    reqlnDelete(id: number): void {

      this.reqlnsvc.remove(id).subscribe({
        next: (res) => {
          console.debug("RequestLine Deleted");
          this.refresh();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    refresh(): void {
      let id = +this.route.snapshot.params["id"];
      this.reqsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Request:", res);
          this.req = res;
          console.debug("Reqreqln:", this.req.requestLines);
         
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
      this.refresh();

    }


}
