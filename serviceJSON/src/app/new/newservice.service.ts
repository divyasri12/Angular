import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class NewService {
    re=[{name:'div', place:'hyd'},
        {name:'div', place:'hyd'}];
    const(){
        return this.re;
    }
}