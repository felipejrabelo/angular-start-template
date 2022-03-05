import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PrivateAreaComponent } from './private-area/private-area.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageOneComponent } from './private-area/page-one/page-one.component';
import { PageTwoComponent } from './private-area/page-two/page-two.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PrivateAreaComponent,
    PageNotFoundComponentComponent,
    AuthComponent,
    NavbarComponent,
    PageOneComponent,
    PageTwoComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
