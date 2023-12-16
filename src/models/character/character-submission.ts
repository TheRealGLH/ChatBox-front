export class CharacterSubmission {
  constructor(name: string, pronouns: string, species: string, bio: string) {
    this.characterName = name;
    this.pronouns = pronouns;
    this.species = species;
    this.bio = bio;
  }

  private characterName: string;
  public get name(): string {
    return this.characterName;
  }
  public set name(v: string) {
    this.characterName = v;
  }

  private pronouns: string;
  public getpronouns(): string {
    return this.pronouns;
  }
  public setpronouns(v: string) {
    this.pronouns = v;
  }

  private species: string;
  public getspecies(): string {
    return this.species;
  }
  public setspecies(v: string) {
    this.species = v;
  }

  private bio: string;
  public getbio(): string {
    return this.bio;
  }
  public setbio(v: string) {
    this.bio = v;
  }
}
