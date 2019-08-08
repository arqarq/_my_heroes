import { Component } from '@angular/core';
import { RowsComponent } from './rows.component';

@Component({
  selector: 'app-template-ref-example',
  templateUrl: './template-ref-example.component.html',
  styleUrls: ['./template-ref-example.component.css'],
  providers: [RowsComponent]
})
export class TemplateRefExampleComponent {
  rows: {name: string}[] = [];

  constructor(
    // private inj: RowsComponent
  ) {
    this.createRows(15);
  }

  onClick() {
    console.log('clicked');
  }

  private getName(row: {name: string}): string {
    console.log('getName() called');
    return row.name;
  }

  private createRows(count: number) {
    for (let i = 0; i < count; i++) {
      this.rows.push({
        name: 'TEST ' + (i + 1)
      });
    }
  }
}
