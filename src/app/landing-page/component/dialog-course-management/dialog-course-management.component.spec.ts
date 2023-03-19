import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCourseManagementComponent } from './dialog-course-management.component';

describe('DialogCourseManagementComponent', () => {
  let component: DialogCourseManagementComponent;
  let fixture: ComponentFixture<DialogCourseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCourseManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCourseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
