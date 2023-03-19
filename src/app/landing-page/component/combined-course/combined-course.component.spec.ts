import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedCourseComponent } from './combined-course.component';

describe('CombinedCourseComponent', () => {
  let component: CombinedCourseComponent;
  let fixture: ComponentFixture<CombinedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
