import { Character } from "../character/character";
import { ChatMessage } from "./chat-message";

export class ChatState {
    signedinCharacter: Character | undefined;
    userCharacters: Character[] = [];

    savedMessages: ChatMessage[] = [];


    getSignedInCharacter(): Character | undefined{
        return this.signedinCharacter;
    }


    setCharacters(characters: Character[]){
        this.userCharacters = characters;
    }

    addMessage(chatMessage: ChatMessage){
        this.savedMessages.push(chatMessage);
    }

}
