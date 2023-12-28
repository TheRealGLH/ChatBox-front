import { Component, OnInit } from '@angular/core';
import { ChatMainComponent } from "./chat-main/chat-main.component";
import { ChatState } from 'src/models/chat/chat-state';
import { ChatCharacterSelectComponent } from "./chat-character-select/chat-character-select.component";
import { CommonModule } from '@angular/common';
import { Character } from 'src/models/character/character';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    imports: [ChatMainComponent, ChatCharacterSelectComponent, CommonModule]
})
export class ChatComponent implements OnInit {

    chatState: ChatState = new ChatState();

    ngOnInit(): void {
        //Filling characters
        let char: Character = new Character("Friend","he/him","fewfwefwefwef","fwefwefwef","friend","null");
        let array:Character[] = [];
        array.push(char);
        array.push(char);
        this.chatState.setCharacters(array);
        console.debug("Chars: "+array)
    }

}
