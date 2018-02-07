import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpRequest} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable()
export class AngularAppServiceService {

  constructor(private AngularHttp: HttpClient) { }
 GetCountries(Url) {
   const AngularReq = new HttpRequest('GET', Url, {
     'observe': 'response',
     'content': 'application/json'
   });
 return this.AngularHttp.request(AngularReq).map((response) => {
 return response;
  });
 }
}
