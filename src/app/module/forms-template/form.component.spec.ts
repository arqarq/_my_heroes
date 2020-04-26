import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { Router } from '@angular/router';
import { CloudFirebaseService } from '../../service/cloud-firebase.service';
import { StartModule } from '../../start.module';
import { StartComponent } from '../../start.component';
import { Observable } from 'rxjs';

describe('FormComponent', () => {
  const cloudFirebaseServiceStub = {
    setCollectionAndDocument: () => 0,
    checkIfLoggedIn2: () => new Observable(),
    checkIfLoggedIn: () => true,
    getDocumentDataAtIndex: () => new Observable()
  }
  const bodyRefStub = {
    classList: {
      add: () => void (0)
    },
    restoreClassesOfBody() {
    }
  }
  let component: FormComponent
  let router: Partial<Router>
  let cFService: Partial<CloudFirebaseService>
  let fixture: ComponentFixture<FormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [StartModule],
      providers: [
        {provide: Router, useValue: {}},
        {provide: CloudFirebaseService, useValue: cloudFirebaseServiceStub}
      ]
    }).compileComponents();
  }))

  beforeEach(() => {
    StartComponent.bodyRef = bodyRefStub
    router = TestBed.inject(Router)
    cFService = TestBed.inject(CloudFirebaseService)
    fixture = TestBed.createComponent(FormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
