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

  serialize(url: string, obj: any): string {
    var str: string[] = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (!url.includes(':' + p)) {
          var v = obj[p];
        } else {
          url = url.replace(':' + p, obj[p]);
        }
      }
    }
    return url + '?' + str.join('&').replace('&&', '&');
  }

  get(path: string, params?: any): Observable<Object> {
    return this.http.get(this.API + path, { params: params });
  }
}
