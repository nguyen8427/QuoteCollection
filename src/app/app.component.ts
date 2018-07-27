import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes=[{details:'At first dreams seem impossible, then improbable, then inevitable.”', author: 'Christopher Reeve', rating: 3},
  {details:'Every worthwhile accomplishment, big or little, has its stages of drudgery and triumph; a beginning, a struggle and a victory.', author: 'Ghandi', rating: 2}];

  createNew(quote){
    console.log(quote);
    this.quotes.push(quote);
  }

  removeQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }


}
