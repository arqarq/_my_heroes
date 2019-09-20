import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoratorService {
  private messageIntoTheWorker: string;
  private messageOutFromTheWorker: string;
  private allowed: boolean;
  private worker: any;

  constructor() {
    this.initWorker();
  }

  postToWorker(text: string) {
    if (this.allowed) {
      this.messageIntoTheWorker = text;
      this.worker.postMessage(text);
    }
  }

  private initWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker('../web-worker/worator.worker', {type: 'module'});
      this.worker.onmessage = ({data}) => {
        this.messageOutFromTheWorker = `page got message from web worker: "${data}", to data sent: "${this.messageIntoTheWorker}"`;
        console.log(this.messageOutFromTheWorker);
      };
      this.allowed = true;
      // worker.postMessage('"hello"');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      if (environment.isNode) {
        console.log('Web workers not allowed here!');
      } else {
        alert('Web workers not allowed here!');
      }
    }
  }
}
