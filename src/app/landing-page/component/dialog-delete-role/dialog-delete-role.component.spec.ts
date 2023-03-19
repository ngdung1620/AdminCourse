import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteRoleComponent } from './dialog-delete-role.component';

describe('DialogDeleteRoleComponent', () => {
  let component: DialogDeleteRoleComponent;
  let fixture: ComponentFixture<DialogDeleteRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
