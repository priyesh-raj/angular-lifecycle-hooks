import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterContentInitComponent } from './after-content-init/after-content-init.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatTabsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DoCheckComponent,
    AfterContentInitComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
