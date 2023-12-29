import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { CurrentNumService} from "../../core/services/currentNum.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isFirstStepClicked = false;
  isSecondStepShowed = false;

  constructor(
    private currentNum: CurrentNumService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  showTitle() {
    this.isFirstStepClicked = true;
  }
  showSecondStep() {
    this.isSecondStepShowed = true;
  }
  navigate() {
    this.currentNum.setIntraStory(1);
    this.router.navigate(
      ['/intra'],
      { queryParams: { story: 1 } });
  }
}
