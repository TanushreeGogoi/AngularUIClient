import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentComponent } from './student/student.component';
import { HttpclientdataComponent } from './httpclientdata/httpclientdata.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { CorsComponent } from './cors/cors.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HttpclientdataComponent,
    ItemListComponent,
    HomeComponent,
    ObservableComponent,
    CorsComponent,
    PromiseObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
