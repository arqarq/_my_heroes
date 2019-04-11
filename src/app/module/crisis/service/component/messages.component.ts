import { Component } from '@angular/core';
import { MessageService2 } from '../message.service';

@Component({
  selector: 'app-messages-crisis',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private messageService: MessageService2) {
  }
}
