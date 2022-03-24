import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, OnInit } from '@angular/core';
import { ContentProjectionChildComponent } from '../shared/content-projection-child/content-projection-child.component';

@Component({
  selector: 'app-after-view-checked',
  templateUrl: './after-view-checked.component.html',
  styleUrls: ['./after-view-checked.component.css'],
})
export class AfterViewCheckedComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  constructor() {}
  afterViewCheckedCount= 0;
  afterViewInitCount = 0;
  afterContentInitCount = 0;
  afterContentCheckedCount = 0;
  doCheckCount = 0;
  render = false;

  @ContentChild(ContentProjectionChildComponent)
  contentProjectionChildComponent: ContentProjectionChildComponent;

  ngOnInit() {
    setTimeout(() => {
      this.render = true;
    }, 3000);
    console.log('OnInit Called !!');
  }

  ngDoCheck() {
    console.log('DoCheck called');
    this.doCheckCount++;
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called !!');
    this.afterContentInitCount++;
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called !!');
    this.afterContentCheckedCount++;
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called !!');
    this.afterViewInitCount++;
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called !!');
    this.afterViewCheckedCount++;
  }
}
