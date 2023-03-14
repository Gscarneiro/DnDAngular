import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly API: string = 'https://localhost:7184/';

  constructor(private http: HttpClient) {}

  get(path: string, params?: any): Observable<Object> {
    return this.http.get(this.API + path);
  }
}
