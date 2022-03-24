import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css'],
})
export class OnChangeComponent implements OnInit {
  employee = { name: 'xyz' };
  constructor() {}

  ngOnInit() {}

  updateEmp() {
    this.employee = { name: 'abc' };
  }
}
