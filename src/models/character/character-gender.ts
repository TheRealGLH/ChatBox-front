interface CharacterGender {
    value: string;
    viewValue: string;
  }

  export class CharacterGenders {
    list: CharacterGender[] = [
      {value: '0', viewValue: 'Male'},
      {value: '1', viewValue: 'Female'},
      {value: '2', viewValue: 'Nonbinary'},
      {value: '2', viewValue: 'None'},
    ];
  }