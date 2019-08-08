import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefExampleComponent } from './template-ref-example.component';

describe('TemplateRefExampleComponent', () => {
  let component: TemplateRefExampleComponent;
  let fixture: ComponentFixture<TemplateRefExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
