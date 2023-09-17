import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

   sum(add1:number,add2:number){
    return add1 + add2
  }
  constructor() {

    console.log(this.sum(100,95));
    console.log(this.protectedPrice(100000))
  }

protectedPrice(price:number) {
     if(price > 1000000){
       return price - (price * 0.2);
     }else if (price < 1000000){
       return price - (price * 0.2);
     }else if (price > 1000000 && price <10000000){
       return price - (price * 0.05);

     }else {
       return price
     }



}
















}



