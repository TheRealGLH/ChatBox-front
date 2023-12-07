import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/models/character/character';
import { CharacterService } from 'src/models/character/character-service';
@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css'],
})
export class ViewCharacterComponent implements OnInit {
  id: string | undefined;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}
  character: Character | undefined;

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['characterId'];
      this.characterService
        .readCharacter(params['characterId'])
        .subscribe((character) => {
          this.character = character;
        });
    });
  }
}
