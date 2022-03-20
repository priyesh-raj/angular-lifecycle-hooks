import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.css'],
})
export class AfterContentInitComponent implements OnInit, AfterContentInit {
  count = 0;
  pottery;
  constructor(private appService: AppService) {
    this.pottery = this.appService.pottery;
  }

  ngOnInit() {
    console.log('OnInit Called !!');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called !!');
    this.count++;
  }

  replace2ndTool() {
    this.appService.pottery.requiredTools[2] = 'wipe cloth';
  }
}
