import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable()
export class AppService {
    constructor(private appservice: HttpClient){
    }
    domain="https://jsonplaceholder.typicode.com/";
        data(){
            return this.appservice.get("https://jsonplaceholder.typicode.com/posts");       
        }
        edit(value){
            return this.appservice.put("https://jsonplaceholder.typicode.com/posts/"+value,value);
        }
        del(value){
            return this.appservice.delete("https://jsonplaceholder.typicode.com/posts/"+value);
        }
        newtab(value){
            let par=new HttpParams();
            par.append('userId', value);
            return this.appservice.get("https://jsonplaceholder.typicode.com/posts?userId="+value);
        }
}