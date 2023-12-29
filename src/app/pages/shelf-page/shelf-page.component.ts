import { Component } from '@angular/core';

@Component({
  selector: 'app-shelf-page',
  templateUrl: './shelf-page.component.html',
  styleUrls: ['./shelf-page.component.scss']
})
export class ShelfPageComponent {
  isCommentShowed = true;

  hideComment() {
    this.isCommentShowed = false;
  }
}
