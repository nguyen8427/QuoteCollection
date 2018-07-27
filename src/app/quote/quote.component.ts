import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quotes;
  @Output() createNew = new EventEmitter();

  newQuote = {details:'', author: '', rating: 0};

  constructor() {}

  ngOnInit() {
}

onSubmit(formData) {
  console.log(formData);
  console.log(this.newQuote);
  this.createNew.emit(this.newQuote);
  this.newQuote = { details: '', author: '', rating: 0};
}
}
