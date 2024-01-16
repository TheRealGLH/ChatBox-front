import { ClientMessageType } from './client-message-type';

export interface ClientMessageSignIn {
  MessageType: ClientMessageType;
  CharacterId: string;
}
