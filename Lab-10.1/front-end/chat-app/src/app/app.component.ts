import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newMessage: string;
  messageList: string[] = [];
  name : any;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.name = prompt("Enter the username");
    this.chatService.getname(this.name);
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
