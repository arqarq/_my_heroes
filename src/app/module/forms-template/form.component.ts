import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartComponent } from '../../';

interface DataScientist {
  label: string,
  textarea?: boolean,
  addButton?: boolean,
  addButtonActivated?: boolean,
  toggle?: boolean,
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
      addButton: true,
      field: 'G',
      value: 'H'
    }
  ];
  private counter = 0;

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

  addRow(index: number) {
    this.toggleRotateY(index);
    if (!this.dataScientist[index + 1]) {
      const label = String.fromCharCode('E'.charCodeAt(0) + this.counter++) + 'pq';
      const newItem: DataScientist = {
        label,
        addButton: true,
        addButtonActivated: false
      };
      this.dataScientist[index + 1] = newItem;
      this.dataScientist[index].addButtonActivated = true;
      return;
    }
    this.dataScientist.splice(index + 1, 1);
    this.dataScientist[index].addButtonActivated = !!this.dataScientist[index + 1];
  }

  private toggleRotateY(index: number) {
    return this.dataScientist[index].toggle = !this.dataScientist[index].toggle;
  }
}
