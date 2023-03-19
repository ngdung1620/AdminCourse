import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCombinedCourseComponent } from './dialog-combined-course.component';

describe('DialogCombinedCourseComponent', () => {
  let component: DialogCombinedCourseComponent;
  let fixture: ComponentFixture<DialogCombinedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCombinedCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCombinedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
