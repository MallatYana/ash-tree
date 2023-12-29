import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-intra-page',
  templateUrl: './intra-page.component.html',
  styleUrls: ['./intra-page.component.scss']
})
export class IntraPageComponent implements OnInit {
  story = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.story = this.route.snapshot.queryParams['story'];
  }
  ngOnInit() {
  }

  navigate() {
    this.router.navigate(
      ['/shelf'],
      { queryParams: { story: 1 } });
  }
}
