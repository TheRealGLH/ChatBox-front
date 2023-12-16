export class ProfileSubmission {
  profileText: string;
  age: number;
  ageDescription: string;
  height: string;
  occupation: string;
  personalityDescription: string;
  location: string;
  constructor(
    profileText: string,
    age: number,
    ageDescription: string,
    height: string,
    occupation: string,
    personalityDescription: string,
    location: string
  ) {
    this.profileText = profileText;
    this.age = age;
    this.ageDescription = ageDescription;
    this.height = height;
    this.occupation = occupation;
    this.personalityDescription = personalityDescription;
    this.location = location;
  }
}
