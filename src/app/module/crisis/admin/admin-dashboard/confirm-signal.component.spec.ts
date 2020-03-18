import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSignalComponent } from './confirm-signal.component';

describe('ConfirmSignalComponent', () => {
  let component: ConfirmSignalComponent;
  let fixture: ComponentFixture<ConfirmSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
