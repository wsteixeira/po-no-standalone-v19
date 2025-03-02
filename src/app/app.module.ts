import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PersonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
