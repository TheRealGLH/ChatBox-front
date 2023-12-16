import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpClientModule } from '@angular/common/http';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpErrorHandler } from './models/http-services/http-error-handling-service';
import { MessageService } from './models/http-services/message-service';
import { CharacterService } from './models/character/character-service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProfileService } from './models/profile/profile-service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, HttpErrorHandler, MessageService, CharacterService, ProfileService),
    provideAnimations()
]
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

