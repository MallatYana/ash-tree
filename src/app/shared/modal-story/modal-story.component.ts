import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-story',
  templateUrl: './modal-story.component.html',
  styleUrls: ['./modal-story.component.scss']
})
export class ModalStoryComponent {
  @Input() shelf!: number;
  @Input() num!: number;

}
