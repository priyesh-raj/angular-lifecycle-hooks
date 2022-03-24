import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-child',
  template: `
    <p>This content is projected into parent component.</p>
  `,
  styleUrls: ['./content-projection-child.component.css'],
})
export class ContentProjectionChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
