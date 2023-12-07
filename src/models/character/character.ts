export class Character {
  constructor(name: string, gender: number, id: string) {
    this.characterName = name;
    this.gender = gender;
    this.id = id;
  }
  public characterName: string;
  public gender: number;
  public id: string;
}
