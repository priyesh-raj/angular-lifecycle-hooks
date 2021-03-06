import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  OnInit,
} from '@angular/core';
import { ContentProjectionChildComponent } from '../shared/content-projection-child/content-projection-child.component';

@Component({
  selector: 'app-after-content-checked',
  template: `
    <section>
      <header>
        <h3>ngAfterContentChecked hook</h3>
        <p>Frequency - Called once after every ngDoCheck()</p>
      </header>
      <hr />
      <main>
        <ng-content></ng-content>
      </main>
      <hr />
      <footer>
        <p>DoCheck called {{ doCheckCount }} times</p>
        <p>AfterContentInit called {{ afterContentInitCount }} times</p>
        <p>AfterContentChecked called {{ afterContentCheckedCount }} times</p>
      </footer>
    </section>  
  `,
  styleUrls: ['./after-content-checked.component.css'],
})
export class AfterContentCheckedComponent
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked
{
  constructor() {}
  afterContentInitCount = 0;
  afterContentCheckedCount = 0;
  doCheckCount = 0;
  @ContentChild(ContentProjectionChildComponent)
  contentProjectionChildComponent: ContentProjectionChildComponent;

  ngOnInit() {
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
}
