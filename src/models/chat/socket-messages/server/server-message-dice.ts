import { ServerMessageType } from './server-message-type';

export interface ServerMessageDiceResult {
  MessageType: ServerMessageType;
  Sides: number;
  Amount: number;
  Addition: number;
  Result: number;
  CharacterName: string;
}
