import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { VeggieBoxHerroComponent } from './partials/veggie-box-herro/veggie-box-herro/veggie-box-herro.component';
import { BreadCrumbsComponent } from './partials/bread-crumbs/bread-crumbs/bread-crumbs.component';
import { ProgressBarComponent } from './partials/progress-bar/progress-bar/progress-bar.component';
import { HeaderComponent } from './partials/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list/products-list.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item/products-list-item.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VeggieBoxHerroComponent,
    BreadCrumbsComponent,
    ProgressBarComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductsListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
