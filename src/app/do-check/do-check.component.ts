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
  constructor() {}

  ngOnInit() {}

  addPotteryTool(eveData: string): void {
    this.pottery.requiredTools.push(eveData);
  }

  replaceNthPotteryTool(tool: string, index: number): void {
    this.pottery.requiredTools[index] = tool;
  }
}
