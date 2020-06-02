import { UiSharedModule } from './../../../../libs/ui-shared/src/lib/ui-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
