import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/models/character/character';
import { CharacterService } from 'src/models/character/character-service';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatIconModule, MatButtonModule],
})
export class ViewCharacterComponent implements OnInit {
  id: string | undefined;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}
  character: Character | undefined;

  longText: String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim "+
  "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "+
  "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate "+
  "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+
  "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  longerText: String = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "+
  "doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi "+
  "architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur "+
  "aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "+
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia "+
  "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad "+
  "minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea "+
  "commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil "+
  "molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"";

  imageUrl: String = "/assets/temp/medic.jpeg";

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
