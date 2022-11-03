import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  
  baseurl: string = `${this.sys.baseurl}/requestlines`;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Requestline[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>;
  }
  get(id: number): Observable<Requestline>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
  create(reqln: Requestline): Observable<Requestline>{
    return this.http.post(`${this.baseurl}`, reqln) as Observable<Requestline>;
  }
  change(reqln: Requestline): Observable<any>{
    return this.http.put(`${this.baseurl}/${reqln.id}`, reqln) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}