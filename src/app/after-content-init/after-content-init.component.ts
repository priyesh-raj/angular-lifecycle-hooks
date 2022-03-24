import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { AppService } from '../app-service.service';
import { ContentProjectionChildComponent } from '../shared/content-projection-child/content-projection-child.component';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.css'],
})
export class AfterContentInitComponent implements OnInit, AfterContentInit {
  constructor() {}
  afterContentInitCount = 0;
  @ContentChild(ContentProjectionChildComponent)
  contentProjectionChildComponent: ContentProjectionChildComponent;

  ngOnInit() {
    console.log('OnInit Called !!');
  }

  ngDoCheck() {
    console.log('DoCheck called');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called !!');
    this.afterContentInitCount++;
  }
}
