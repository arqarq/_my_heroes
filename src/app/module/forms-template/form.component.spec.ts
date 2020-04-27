import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { Router } from '@angular/router';
import { CloudFirebaseService } from '../../service/cloud-firebase.service';
import { StartModule } from '../../start.module';
import { StartComponent } from '../../start.component';
import { Observable } from 'rxjs';

function createNewEvent(eventName: string, bubbles = false, cancelable = false) {
  const evt = document.createEvent('CustomEvent')
  evt.initCustomEvent(eventName, bubbles, cancelable, null)
  return evt
}

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
    },
    removeAttribute() {
    }
  }
  let component: FormComponent
  let router: Partial<Router>
  let cFService: Partial<CloudFirebaseService>
  let fixture: ComponentFixture<FormComponent>
  let element

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
    element = fixture.nativeElement;
    fixture.detectChanges()
  })

  afterEach(() => {
    fixture.destroy() // calls ngOnDestroy()
    element.remove()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should update input value in the model', fakeAsync(() => {
    const input = element.querySelector('input#id_0')
    const event = createNewEvent('input')

    input.value = 'Red'
    input.dispatchEvent(event)
    tick()
    fixture.detectChanges()
    expect(component.dataScientist[0].field).toEqual('Red')
  }))

  it('should update input value from model', fakeAsync(() => {
    component.dataScientist[0].field = 'Blue'
    fixture.detectChanges()
    tick()
    const input = element.querySelector('input#id_0')
    expect(input.value).toBe('Blue')
  }))
})
