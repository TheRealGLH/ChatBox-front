export class ChatMessage{
    timeStamp: EpochTimeStamp;
    content: String;
    ownerId: String;
    ownerName: String;

    constructor(timeStamp: EpochTimeStamp, content: String, ownerId: String, ownerName: String){
        this.timeStamp = timeStamp;
        this.content = content;
        this.ownerId = ownerId;
        this.ownerName = ownerName;
    }
}