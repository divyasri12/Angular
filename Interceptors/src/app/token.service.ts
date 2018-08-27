import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req, next){
    let authser = this.inject.get(AuthService)
    let token = req.clone({
      setHeaders: {Authorization: `Bearer ${authser.log()}`}
    });
    return next.handle(token);
     
  }
}
