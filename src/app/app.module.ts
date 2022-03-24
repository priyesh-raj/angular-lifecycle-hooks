import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterContentInitComponent } from './after-content-init/after-content-init.component';
import { ChildComponent } from './shared/child/child.component';
import { ContentProjectionChildComponent } from './shared/content-projection-child/content-projection-child.component';
import { AfterContentCheckedComponent } from './after-content-checked/after-content-checked.component';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
import { AfterViewCheckedComponent } from './after-view-checked/after-view-checked.component';
import { OnDestroyComponent } from './on-destroy/on-destroy.component';
import { OnChangeComponent } from './on-change/on-change.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatTabsModule],
  declarations: [
    AppComponent,
    ChildComponent,
    OnChangeComponent,
    DoCheckComponent,
    AfterContentInitComponent,
    AfterContentCheckedComponent,
    AfterViewInitComponent,
    AfterViewCheckedComponent,
    OnDestroyComponent,
    ContentProjectionChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
