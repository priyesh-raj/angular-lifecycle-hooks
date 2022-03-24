import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  OnInit,
} from '@angular/core';
import { ContentProjectionChildComponent } from '../shared/content-projection-child/content-projection-child.component';

@Component({
  selector: 'app-after-view-init',
  templateUrl: './after-view-init.component.html',
  styleUrls: ['./after-view-init.component.css'],
})
export class AfterViewInitComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  constructor() {}
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
}
