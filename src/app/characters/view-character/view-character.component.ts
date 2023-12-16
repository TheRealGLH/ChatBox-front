import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/models/character/character';
import { CharacterService } from 'src/models/character/character-service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CharacterSubmission } from 'src/models/character/character-submission';
import { Profile } from 'src/models/profile/profile';
import { ProfileService } from 'src/models/profile/profile-service';
import { ProfileSubmission } from 'src/models/profile/profile-submission';
@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class ViewCharacterComponent implements OnInit {
  id: string | undefined;
  private sub: any;
  editingCharacter: boolean = false;
  formControlName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(25),
  ]);
  formControlPronouns = new FormControl('', [Validators.maxLength(15)]);
  formControlSpecies = new FormControl('', [Validators.maxLength(15)]);
  formControlBio = new FormControl('', [Validators.maxLength(1024)]);

  editingProfile: boolean = false;
  formControlAge = new FormControl('', [
    Validators.max(9999),
    Validators.min(0),
  ]);
  formControlAgeDesc = new FormControl('', [Validators.maxLength(256)]);
  formControlHeight = new FormControl('', [Validators.maxLength(256)]);
  formControlOccupation = new FormControl('', [Validators.maxLength(256)]);
  formControlPersonality = new FormControl('', [Validators.maxLength(256)]);
  formControlLocation = new FormControl('', [Validators.maxLength(256)]);
  formControlProfileText = new FormControl('', [Validators.maxLength(4096)]);
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private profileService: ProfileService
  ) {}
  character: Character | undefined;
  profile: Profile | undefined;

  longText: String =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
    'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
    'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
    'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  longerText: String =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ' +
    'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ' +
    'architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ' +
    'aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ' +
    'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia ' +
    'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad ' +
    'minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea ' +
    'commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil ' +
    'molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"';

  imageUrl: String = '/assets/temp/medic.jpeg';

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['characterId'];
      this.characterService
        .readCharacter(params['characterId'])
        .subscribe((character) => {
          this.character = character;
        });
    });
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['characterId'];
      this.profileService
        .readProfile(params['characterId'])
        .subscribe((profile) => {
          this.profile = profile;
        });
    });
  }

  toggleEditChar(): void {
    this.editingCharacter = !this.editingCharacter;
    if (this.editingCharacter) {
      this.formControlName.setValue(this.character?.characterName ?? '');
      this.formControlPronouns.setValue(this.character?.pronouns ?? '');
      this.formControlSpecies.setValue(this.character?.species ?? '');
      this.formControlBio.setValue(this.character?.bio ?? '');
    } else {
      //TODO: maybe check if stuff was edited
    }
  }

  toggleEditProfile(): void {
    this.editingProfile = !this.editingProfile;
    if (this.editingProfile) {
      this.formControlAge.setValue(this.profile?.age.toString() ?? '');
      this.formControlAgeDesc.setValue(this.profile?.ageDescription ?? '');
      this.formControlHeight.setValue(this.profile?.height ?? '');
      this.formControlPersonality.setValue(
        this.profile?.personalityDescription ?? ''
      );
      this.formControlOccupation.setValue(this.profile?.occupation ?? '');
      this.formControlLocation.setValue(this.profile?.location ?? '');
      this.formControlProfileText.setValue(this.profile?.profileText ?? '');
    }
  }

  submitEditCharacter(): void {
    if (
      this.formControlBio.valid &&
      this.formControlPronouns.valid &&
      this.formControlName.valid &&
      this.formControlSpecies.valid
    ) {
      let characterSubmission: CharacterSubmission = new CharacterSubmission(
        this.formControlName.value ?? '',
        this.formControlPronouns.value ?? '',
        this.formControlSpecies.value ?? '',
        this.formControlBio.value ?? ''
      );
      this.sub = this.route.params.subscribe((params) => {
        this.id = params['characterId'];
        this.characterService
          .updateCharacter(characterSubmission, params['characterId'])
          .subscribe((character) => {
            this.character = character;
          });
      });
    }
    this.editingCharacter = false;
  }
  submitEditProfile(): void {
    if (
      //this.formControlAge.valid &&
      this.formControlAgeDesc.valid &&
      this.formControlBio.valid &&
      this.formControlHeight.valid &&
      this.formControlLocation.valid &&
      this.formControlOccupation.valid &&
      this.formControlPersonality.valid &&
      this.formControlProfileText.valid
    ) {
      let profileSubmission: ProfileSubmission = new ProfileSubmission(
        this.formControlProfileText.value ?? '',
        parseInt(this.formControlAge.value ?? ''),
        this.formControlAgeDesc.value ?? '',
        this.formControlHeight.value ?? '',
        this.formControlOccupation.value ?? '',
        this.formControlPersonality.value ?? '',
        this.formControlLocation.value ?? ''
      );
      this.sub = this.route.params.subscribe((params) => {
        this.id = params['characterId'];
        this.profileService
          .updateProfile(profileSubmission, params['characterId'])
          .subscribe((profile) => {
            this.profile = profile;
          });
      });
      this.editingProfile = false;
    }
    else {
      console.debug("The form validation did not succeed...")
    }
  }
}
