export class Profile {
  characterHash: string;
  profileText: string;
  age: number;
  ageDescription: string;
  height: string;
  occupation: string;
  personalityDescription: string;
  location: string;
  owner: string;
  id: string;
  constructor(
    characterHash: string,
    profileText: string,
    age: number,
    ageDescription: string,
    height: string,
    occupation: string,
    personalityDescription: string,
    location: string,
    owner: string,
    id: string
  ) {
    this.characterHash = characterHash;
    this.profileText = profileText;
    this.age = age;
    this.ageDescription = ageDescription;
    this.height = height;
    this.occupation = occupation;
    this.personalityDescription = personalityDescription;
    this.location = location;
    this.owner = owner;
    this.id = id;
  }
}
