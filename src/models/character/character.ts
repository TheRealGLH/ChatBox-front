export class Character {
  constructor(name: string, pronouns: string, id: string, bio: string, species: string, owner: string) {
    this.characterName = name;
    this.pronouns = pronouns;
    this.id = id;
    this.bio = bio;
    this.species = species;
    this.owner = owner;
  }
  public characterName: string;
  public pronouns: string;
  public id: string;
  public bio: string;
  public species: string;
  public owner: string;
}
