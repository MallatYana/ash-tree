import {Component, OnInit} from '@angular/core';
import { Input} from "@angular/core";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() img?: string;
  @Input() text?: string;
  @Input() link?: string;


  ngOnInit() {
  }
}
