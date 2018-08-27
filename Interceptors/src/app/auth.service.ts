import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
 export class AuthService {
     constructor(private http:HttpClient){

     }
     log(){
         return !!localStorage.getItem('token');
     }
 }
