import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MainPageComponent} from "./main-page/main-page.component";
import {SharedModule} from "../shared/shared.module";
import { IntraPageComponent } from './intra-page/intra-page.component';
import { AppRoutingModule} from "../app-routing.module";
import { ShelfPageComponent } from './shelf-page/shelf-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    IntraPageComponent,
    ShelfPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: []
})
export class PagesModule { }
