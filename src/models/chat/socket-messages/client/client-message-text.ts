import { ClientMessageType } from './client-message-type';

export interface ClientMessageText {
  MessageType: ClientMessageType;
  MessageContent: string;
}
