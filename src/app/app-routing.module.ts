import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import {IntraPageComponent} from "./pages/intra-page/intra-page.component";
import {ShelfPageComponent} from "./pages/shelf-page/shelf-page.component";

const routes: Routes = [
  {
    path: 'intra',
    component: IntraPageComponent
  },
  {
    path: 'shelf',
    component: ShelfPageComponent
  },
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
