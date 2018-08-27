import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService{
    constructor(private http:HttpClient) { 
    }
    // data(){
    //   return this.http.get('http://demo7102451.mockable.io/div');
    // }
    andata(div){
      return this.http.post('http://demo7102451.mockable.io/div',div);
    }
}