import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewCharacterComponent } from './characters/view-character/view-character.component';
import { EditCharacterComponent } from './characters/edit-character/edit-character.component';
import { MyCharactersComponent } from './characters/my-characters/my-characters.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'character/mine', component: MyCharactersComponent},
  { path: 'character/view/:characterId', component: ViewCharacterComponent},
  { path: 'character/edit/:characterId', component: EditCharacterComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
