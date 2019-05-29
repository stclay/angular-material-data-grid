import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFetchData } from '../fetch-data.model';
import { Observable } from 'rxjs';

@Injectable()
export class FetchDataService {
  private _url: string = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  getRecords(): Observable<IFetchData[]> {
    return this.http.get<IFetchData[]>(this._url);
  }
}
