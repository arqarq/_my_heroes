import { Component } from '@angular/core';
import { RowsComponent } from './rows.component';
import { WoratorService } from '../../service/worator.service';

@Component({
  selector: 'app-template-ref-example',
  templateUrl: './template-ref-example.component.html',
  styleUrls: ['./template-ref-example.component.css']
})
export class TemplateRefExampleComponent {
  rows: {name: string}[] = [];
  flag: boolean;
  tock: boolean;
  private timeoutId: NodeJS.Timeout;

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
      this.flag = false;
      this.tock = !this.tock;
      return () => clearTimeout(this.timeoutId);
    }, 100);
    console.log('clicked');
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
