import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicejsonService {

  constructor(private http:HttpClient) { 
  }
  data(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
