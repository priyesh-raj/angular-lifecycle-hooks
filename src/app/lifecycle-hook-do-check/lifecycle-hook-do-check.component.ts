import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook-do-check',
  templateUrl: './lifecycle-hook-do-check.component.html',
  styleUrls: ['./lifecycle-hook-do-check.component.css'],
})
export class LifecycleHookDoCheckComponent implements OnInit, DoCheck {
  pottery = {
    toolsRequired: [
      'toothbrush',
      'fork',
      'popsicle stick',
      'human fingers(preferably not others)',
      'fingernails',
    ],
    relatedActivities: ['SCULPTURING', 'PINCH POTS', 'COILS'],
  };
  constructor() {}

  ngOnInit() {
    console.log('OnInit method called');
  }

  ngDoCheck() {
    console.log('DoCheck method called', this.pottery);
  }

  addActivity() {
    this.pottery.relatedActivities.push('DYING');
  }
}
