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
  userData;
  constructor(public authService: AuthService, public cs: ChatService) {
    this.authService.getUser().then(data => {
      console.log(data);
      this.userData = data;
    });

  }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
}
}
