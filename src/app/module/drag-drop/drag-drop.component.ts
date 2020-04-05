import { Component, OnDestroy, OnInit } from '@angular/core';
import { DATA } from '../../repository/data-drag-drop';
import { StartComponent } from '../../';

const KEY0 = 'indexOfItemPassed';
const KEY1 = 'contentOfItemPassed';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit, OnDestroy {
  readonly nodes = DATA;
  private indexOfNodeRef: number;
  private pos1: number;
  private pos2: number;
  private pos3: number;
  private pos4: number;
  private startElementRefOut: HTMLDivElement;

  constructor() {
    const timeoutId = setTimeout(() => {
      this.nodes.forEach((node) => {
        node.L = Math.floor(Math.random() * 97) + '%';
        node.T = Math.floor(Math.random() * 95) + '%';
      });
      const timeoutId2 = setTimeout(() => {
        this.nodes.forEach((node) => {
          node.blob = Math.random() < .5;
        });
        clearTimeout(timeoutId2);
      }, 1500);
      clearTimeout(timeoutId);
    }, 250);
  }

  ngOnInit() {
    StartComponent.bodyRef.classList.add('body_background_new_color');
  }

  ngOnDestroy() {
    StartComponent.restoreClassesOfBody();
  }

  onDragStart(event: DragEvent, i: number, elOut: HTMLDivElement) {
    console.warn('dragStart: index of dragged element: ' + i);
    this.indexOfNodeRef = i;
    this.startElementRefOut = elOut;
    event.dataTransfer.setData(KEY0, i + '');
    event.dataTransfer.setData(KEY1, this.nodes[i].content);
  }

  onDragOver(event: DragEvent, i: number) {
    if (this.indexOfNodeRef === i) { // drag&drop na siebie wyłączony
      return;
    }
    event.preventDefault();
    if (!this.nodes[i].blob) { // dla wstawiania do pustego elementu
      console.warn('dragOver: index of element being dragged over: ' + i);
      return;
    } // dla nadpisywania elementu
    console.warn('dragOver: overwriting element with index: ' + i);
  }

  onDrop(event: DragEvent, i: number, elOut: HTMLDivElement) {
    const indexPassed = event.dataTransfer.getData(KEY0);
    if (indexPassed) {
      event.preventDefault();
      const contentPassed = event.dataTransfer.getData(KEY1);
      console.warn('drop: index of element to drop onto: ' + i + ' (from: ' + indexPassed + ')');
      const tempZIndex = elOut.style.zIndex;
      elOut.style.zIndex = this.startElementRefOut.style.zIndex;
      this.startElementRefOut.style.zIndex = tempZIndex;
      this.nodes[i].blob = true;
      this.nodes[i].content = contentPassed;
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

  onMouseDown(event: MouseEvent, divElement: HTMLDivElement, i: number) {
    event.preventDefault();
    divElement.classList.remove('transition');
    this.pos3 = event.clientX;
    this.pos4 = event.clientY;
    console.log('---- x', this.pos3, '---- y', this.pos4);
    document.onmouseup = () => {
      console.log('stop');
      document.onmousemove = document.onmouseup = null;
      divElement.classList.add('transition');
    };
    document.onmousemove = (event2: MouseEvent) => {
      event2.preventDefault();
      console.log('-- x', event2.clientX, '-- y', event2.clientY);
      this.pos1 = this.pos3 - event2.clientX;
      this.pos2 = this.pos4 - event2.clientY;
      this.pos3 = event2.clientX;
      this.pos4 = event2.clientY;
      // divElement.style.top = (divElement.offsetTop - this.pos2) + 'px';
      this.nodes[i].T = (divElement.offsetTop - this.pos2) + 'px';
      // divElement.style.left = (divElement.offsetLeft - this.pos1) + 'px';
      this.nodes[i].L = (divElement.offsetLeft - this.pos1) + 'px';
    };
  }

  getNextZ(index: number) {
    return index * 2 + 1;
  }

  getZFromOuterEl(divElementOuter: HTMLDivElement) {
    return +divElementOuter.style.zIndex + 1;
  }
}
