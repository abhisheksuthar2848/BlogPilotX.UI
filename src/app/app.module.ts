import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevbarComponent } from './Core/Component/nevbar/nevbar.component';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NevbarComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
