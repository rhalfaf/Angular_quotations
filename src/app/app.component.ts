import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = { author: '', quotation: '', votes: 0 };

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQutation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }
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

}
