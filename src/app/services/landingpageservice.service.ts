import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
  public item = 'John Doe'
  public numberarray:number []= [1,2,3,4,5,6,7,8,9,10]

  returnitem() {
    return this.item;
  }

  returnnum() {
    return this.numberarray;
  }
}
