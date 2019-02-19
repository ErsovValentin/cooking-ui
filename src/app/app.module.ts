import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPComponent } from './components/main-p/main-p.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DishTypeCardComponent } from './components/main-p/dish-type-card/dish-type-card.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { InstaComponent } from './components/insta/insta.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadComponent } from './components/download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPComponent,
    NavbarComponent,
    DishTypeCardComponent,
    DishListComponent,
    DishCardComponent,
    InstaComponent,
    FooterComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
