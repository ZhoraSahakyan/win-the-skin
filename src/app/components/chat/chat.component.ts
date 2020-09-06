import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public toggleChat: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleChatBar(): void {
   this.toggleChat = ! this.toggleChat;
  }

}
