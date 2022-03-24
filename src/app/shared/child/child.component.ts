import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <input [value]=emp.name />
    <p>ngOnChanges called {{ onChangeCount }} times </p>
  `,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, OnInit {
  onChangeCount = 0;
  @Input() emp;
  constructor() {}

  ngOnChanges() {
    console.log('onchange called');
    this.onChangeCount++;
  }
  ngOnInit() {}
}
