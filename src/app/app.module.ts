import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ServiceComponent } from './service/service.component';
import { ServiceHistoryComponent } from './service/service-history/service-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ServiceHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
