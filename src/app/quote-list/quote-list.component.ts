import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() removeQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likes(quote){
    quote.rating++;
  }
  disLikes(quote){
    quote.rating--;
  }

  delete(quote){
    this.removeQuote.emit(quote);
  }


}
