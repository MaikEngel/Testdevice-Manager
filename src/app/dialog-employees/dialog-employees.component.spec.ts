import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmployeesComponent } from './dialog-employees.component';

describe('DialogEmployeesComponent', () => {
  let component: DialogEmployeesComponent;
  let fixture: ComponentFixture<DialogEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
