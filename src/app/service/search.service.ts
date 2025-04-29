import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../customer'; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:8081/api/customers'; 

  constructor(private http: HttpClient) {}

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  
  private searchIdSource = new Subject<number>();
  searchId$ = this.searchIdSource.asObservable();

  sendSearchId(id: number) {
    this.searchIdSource.next(id);
  }
}

