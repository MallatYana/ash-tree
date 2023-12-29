import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SliderComponent} from "./slider/slider.component";
import { ModalStoryComponent } from './modal-story/modal-story.component';

@NgModule({
  declarations: [
    SliderComponent,
    ModalStoryComponent
  ],
  imports: [
    BrowserModule
  ],
    exports: [
        SliderComponent,
        ModalStoryComponent
    ],
  providers: []
})
export class SharedModule { }
