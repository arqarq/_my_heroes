import { Component } from '@angular/core';
import { RowsComponent } from './rows.component';

@Component({
  selector: 'app-template-ref-example',
  templateUrl: './template-ref-example.component.html',
  styleUrls: ['./template-ref-example.component.css']
})
export class TemplateRefExampleComponent {
  rows: {name: string}[] = [];

  constructor(
    private inj: RowsComponent
  ) {
    this.createRows(15);
  }

  getName(row: {name: string}): string {
    console.log('getName() called');
    return row.name;
  }

  onClick() {
    this.inj.detect();
    console.log('clicked');
  }

  private createRows(count: number) {
    for (let i = 0; i < count; i++) {
      this.rows.push({
        name: 'TEST ' + (i + 1)
      });
    }
  }
}
