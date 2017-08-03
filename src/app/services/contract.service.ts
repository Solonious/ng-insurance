import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CarContract } from '../models/car-contract';
import { CarContractInfo } from '../models/car-contract-info';

@Injectable()
export class AppService {
  apiContracts = 'http://balanews.datamaster.com.ua/api/v1/get-car-contracts';
  apiContractInfo = 'http://balanews.datamaster.com.ua/api/v1/get-car-contract-info';

  constructor(private http: Http) { }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
  getContracts(): Observable<CarContract[]> {
    return this.http.get(this.apiContracts)
      .map(res => res.json() as CarContract[])
      .catch(this.handleError);
  }
  getContractInfo(id: number): Observable<CarContractInfo> {
    return this.http.get(`${this.apiContractInfo}/${id}`)
      .map(res => res.json() as CarContractInfo)
      .catch(this.handleError);
  }
}
