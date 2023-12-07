export class Character {
  constructor(name: string, gender: number) {
    this.characterName = name;
    this.gender = gender;
  }

  private characterName: string;
  public get name(): string {
    return this.characterName;
  }
  public set name(v: string) {
    this.characterName = v;
  }

  private gender: number;
  public get charGender(): number {
    return this.gender;
  }
  public set charGender(num: number) {
    this.gender = num;
  }
}
