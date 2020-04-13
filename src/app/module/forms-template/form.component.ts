import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';

interface DataScientist {
  label: string,
  textarea?: boolean,
  field?: string,
  value?: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  dataScientist: DataScientist[] = [
    {
      label: 'Apq',
      field: 'A',
      value: 'B'
    },
    {
      label: 'Bpq',
      field: 'C',
      value: 'D'
    },
    {
      label: 'Cpq',
      textarea: true,
      field: 'E',
      value: 'F'
    },
    {
      label: 'Dpq',
      textarea: true,
      field: 'G',
      value: 'H'
    }
  ];

  constructor(private router: Router) {
  }

  anuluj() {
    this.router.navigate(['choose']);
  }

  ngOnInit() {
    StartComponent.bodyRef.classList.add('body_background_image');
  }

  ngOnDestroy() {
    StartComponent.restoreClassesOfBody();
  }

  saveForm() {
    console.log(this.dataScientist);
  }

  checkForMultiLine(data: string): boolean {
    return data.search(new RegExp(/[\r\n]/)) !== -1 || data.length > 16;
  }
}
