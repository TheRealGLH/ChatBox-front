import { ServerMessageType } from './server-message-type';

export interface ServerMessageLogin {
  MessageType: ServerMessageType;
  Success: boolean;
}
