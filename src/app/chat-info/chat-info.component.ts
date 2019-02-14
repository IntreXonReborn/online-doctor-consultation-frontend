import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.css']
})
export class ChatInfoComponent implements OnInit {

  userChats$;
  user_id;
  constructor(public auth: AuthService, public cs: ChatService) {


  }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
}
}
