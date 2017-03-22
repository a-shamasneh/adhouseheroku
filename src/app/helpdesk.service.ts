import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HelpdeskService {


  constructor(private http:Http) { }
  	sendemail(data){
    console.log(data)
    return this.http.post('/api/helpdesk/support',data).map(res=>res.json())
  }
}
