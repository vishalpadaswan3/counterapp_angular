import { Component } from '@angular/core';

@Component({
  selector: 'app-count-depend',
  templateUrl: './count-depend.component.html',
  styleUrls: ['./count-depend.component.css']
})
export class CountDependComponent {

  count = 0;

  constructor() { }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
