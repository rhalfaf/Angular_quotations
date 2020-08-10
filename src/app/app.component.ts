import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  quotes: Quotation[] = QUOTES;

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
    console.log(value);
  }

  bestQuotes(){
    return this.quotes.filter(q => q.votes > 0);
  }
  worstQuotes(){
    return this.quotes.filter(q => q.votes < 0);
  }
  OnNewQuotation(quotation: Quotation){
    this.quotes.unshift(quotation);
  }

}
