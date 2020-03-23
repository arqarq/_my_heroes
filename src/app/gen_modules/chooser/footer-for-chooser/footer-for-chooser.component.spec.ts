import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterForChooserComponent } from './footer-for-chooser.component';

describe('FooterForChooserComponent', () => {
  let component: FooterForChooserComponent;
  let fixture: ComponentFixture<FooterForChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterForChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterForChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
