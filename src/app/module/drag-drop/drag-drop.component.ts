import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { DATA } from '../../repository/data-drag-drop';

const KEY0 = 'indexOfItemPassed';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class DragDropComponent implements AfterViewInit, OnDestroy {
  private static bodyClasses: string;
  nodes = DATA;
  private initDrag = false;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.storeClassesOfBody();
    this.changeBackgroundColorOfBody();
  }

  ngOnDestroy(): void {
    this.restoreClassesOfBody();
  }

  dragStart(event: DragEvent, i: number) {
    console.warn('dragStart: index of dragged element: ' + i);
    event.dataTransfer.setData(KEY0, i + '');
    this.initDrag = true;
  }

  dragOver(event: DragEvent, i: number) {
    if (
      this.initDrag && // brak inicjacji drag dla braku elementu
      !this.nodes[i].blob // brak możliwości nadpisywania elementu
    ) {
      console.warn('dragOver: index of element being dragged over: ' + i);
      event.preventDefault();
      return;
    }
    console.warn('dragOver: drag not enabled for index: ' + i);
  }

  onDrop(event: DragEvent, i: number) {
    const indexPassed = event.dataTransfer.getData(KEY0);
    if (indexPassed) {
      event.preventDefault();
      console.warn('drop: index of element to drop onto: ' + i + ' (from: ' + indexPassed + ')');
      this.nodes[i].blob = true;
      this.initDrag = false;
      if (!event.ctrlKey) {
        this.nodes[+indexPassed].blob = false;
      }
    }
  }

  onClick(event: MouseEvent, i: number) {
    event.preventDefault();
    if (event.shiftKey) {
      this.nodes[i].blob = !this.nodes[i].blob;
    }
  }

  private changeBackgroundColorOfBody() {
    this.elementRef.nativeElement.ownerDocument.body.className = DragDropComponent.bodyClasses
      ? DragDropComponent.bodyClasses + ' body_background_new_color'
      : 'body_background_new_color';
  }

  private storeClassesOfBody() {
    DragDropComponent.bodyClasses = this.elementRef.nativeElement.ownerDocument.body.className;
  }

  private restoreClassesOfBody() {
    if (DragDropComponent.bodyClasses) {
      this.elementRef.nativeElement.ownerDocument.body.className = DragDropComponent.bodyClasses;
      return;
    }
    this.elementRef.nativeElement.ownerDocument.body.removeAttribute('class');
  }
}
