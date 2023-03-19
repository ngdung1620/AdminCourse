import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLessonComponent } from './dialog-lesson.component';

describe('DialogLessonComponent', () => {
  let component: DialogLessonComponent;
  let fixture: ComponentFixture<DialogLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
