import { Component, OnInit } from '@angular/core';
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
  
  constructor(
    private reqlnsvc: RequestLineService,
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private prodsvc: ProductService,
    private router: Router
    
    ) { }
    
    ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      this.reqsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Request:", res);
          this.req = res;
          this.reqln = this.req.requestLine;
          console.debug("Reqlns:", this.reqln);
         
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
      
    //read the requestlines by requestId and put them into the reqln array.
    //get the full list of request lines, then find the ones matching the requestId and put into the array
    /*
    this.reqlnsvc.list().subscribe({
      next: (res) => {
        console.debug("Reqlines:", res);
        this.reqln = res;
        
      },
      error: (err) => {
        console.error(err);
      }
    });
    */
    
  
  }


}
