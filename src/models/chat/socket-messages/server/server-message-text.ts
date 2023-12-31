import { ServerMessageType } from './server-message-type';

export interface ServerMessageText {
  MessageType: ServerMessageType;
  MessageContent: string;
  CharacterName: string;
}
