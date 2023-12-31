import { ClientMessageType } from './client-message-type';

export interface ClientMessageDice {
  MessageType: ClientMessageType;
  Sides: number;
  Amount: number;
  Addition: number;
}
