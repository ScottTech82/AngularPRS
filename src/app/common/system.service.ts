import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseurl: string = "http://localhost:5555/api";

  user: any = null;

  constructor(
    private router: Router,
    private sys: SystemService
  ) { }

  chkLogin(): void {
    if(this.user === null) {
      this.router.navigateByUrl("/user/login");
    }
  }
  
}
