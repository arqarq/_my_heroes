import { Component } from '@angular/core';
import { RowsComponent } from './rows.component';
import { WoratorService } from '../../service/worator.service';

interface RowsType {
  name: string
}

@Component({
  selector: 'app-template-ref-example',
  templateUrl: './template-ref-example.component.html'
})
export class TemplateRefExampleComponent {
  rows: RowsType[] = [];
  flag: boolean;
  tock: boolean;
  private timeoutId;

  constructor(private webWorker: WoratorService) {
    this.createRows(15);
    this.webWorker.postToWorker('hello from TemplateRefExampleComponent!');
  }

  onClick2() {
    RowsComponent.detect();
    console.log('start - via TemplateRefExampleComponent reference to static in RowsComponent');
  }

  onClick() {
    this.flag = true;
    this.timeoutId = setTimeout(() => {
      clearTimeout(this.timeoutId);
      this.flag = false;
      this.tock = !this.tock;
    }, 100);
  }

  getName(row: {name: string}): string {
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
