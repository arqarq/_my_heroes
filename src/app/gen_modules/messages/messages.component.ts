import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  var: {[key: string]: number | string} = {a: 7, 5: '8', 7: '9'};
  var2: {[key: string]: number | string} = {d: 11, b: 12};
  var3: {[key: string]: number | string} = {...this.var2, ...this.var, 6: 10};

  constructor(
    public messageService: MessageService
    // private messageService: MessageService // nie dla --aot
  ) {
    console.log('=-=-=-=-=-= ', this.var3);
  }

  addModifyingTag(message: string, tag = 'small', close = true): string {
    const tagOpen = '<' + tag + '>';
    let tagClose = '';
    if (close) {
      tagClose = '</' + tag + '>';
    }
    return tagOpen + message + tagClose;
  }
}
