import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeviceManagerComponent } from './dialog-device-manager.component';

describe('DialogDeviceManagerComponent', () => {
  let component: DialogDeviceManagerComponent;
  let fixture: ComponentFixture<DialogDeviceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeviceManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeviceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
