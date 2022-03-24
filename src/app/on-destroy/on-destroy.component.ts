import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.css'],
})
export class OnDestroyComponent implements OnInit, OnDestroy {
  interval;
  count = 0;
  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      console.log(this.count);
      this.count++;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
