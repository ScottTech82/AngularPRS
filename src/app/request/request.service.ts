import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../common/system.service';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = `${this.sys.baseurl}/requests`;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  create(req: Request): Observable<Request>{
    return this.http.post(`${this.baseurl}`, req) as Observable<Request>;
  }
  change(req: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}`, req) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
  review(req: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/review/${req.id}`, req) as Observable<Request>;
  }
  getReviews(id: number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/reviews/${this.sys.user.id}`) as Observable<Request[]>;
  }
  approveReview(req: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/approve/${req.id}`, req) as Observable<Request>;
  }
  rejectReview(req: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/reject/${req.id}`, req) as Observable<Request>;
  }
}
