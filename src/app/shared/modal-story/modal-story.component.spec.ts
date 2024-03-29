import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStoryComponent } from './modal-story.component';

describe('ModalStoryComponent', () => {
  let component: ModalStoryComponent;
  let fixture: ComponentFixture<ModalStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
