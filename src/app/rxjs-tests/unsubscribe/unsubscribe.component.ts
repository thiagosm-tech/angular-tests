import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent {

  num1: number = 0;
  num2: number = 0;

  subs: Subscription[] = [];

  set add(s: Subscription) {
    this.subs.push(s);
  }

  subscribe() {
    this.add = timer(0, 10).subscribe(res => this.num1 = res);
    this.add = timer(0, 10).subscribe(res => this.num2 = res);
  }

  unsubscribe() {
    this.subs.map(s => s.unsubscribe());
  }

  clearCount() {
    this.num1 = 0;
    this.num2 = 0;
  }

}
