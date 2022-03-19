import {
  Component,
  ContentChild,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { DoCheckComponent } from './do-check/do-check.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('DoCheckComponent', { static: true })
  doCheckComponent;
  name = 'Angular ' + VERSION.major;

  addPotteryTool(eve: string) {
    // this.doCheckComponent.pottery.requiredTools.push(eve);
    console.log(this.doCheckComponent);
    // this.doCheckComponent.pottery
  }
}
