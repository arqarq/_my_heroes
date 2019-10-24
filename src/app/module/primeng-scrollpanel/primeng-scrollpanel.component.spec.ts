import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengScrollpanelComponent } from './primeng-scrollpanel.component';

describe('PrimengScrollpanelComponent', () => {
  let component: PrimengScrollpanelComponent;
  let fixture: ComponentFixture<PrimengScrollpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengScrollpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengScrollpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
