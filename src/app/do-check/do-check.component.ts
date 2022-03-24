import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css'],
})
export class DoCheckComponent implements OnInit {
  public pottery = {
    requiredTools: ['Needles', 'Scrappers', 'Calipers', 'Sponges', 'Brushes'],
    types: ['Earthenware', 'Stoneware', 'Porcelain'],
  };

  employee = {
    name: 'xyz',
    age: '32',
    experience: '36 months',
  };

  constructor() {}

  ngOnInit() {}

  updateEmp() {
    this.employee.name = 'abc';
  }
}
