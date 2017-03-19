import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  title = 'Clock';
  clock;
  click$ = new Subject();

  constructor() {
    this.clock = Observable.merge(
      this.click$,
      Observable.interval(5000)
    )
      .startWith(new Date())
      .scan( (acc, curr) => {
        console.log(acc);
        //const date = new Date(acc.getTime());
        return curr;
      });
  }

  ngOnInit() {}

}
