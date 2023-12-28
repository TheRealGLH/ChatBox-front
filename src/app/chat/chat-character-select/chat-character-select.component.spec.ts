import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCharacterSelectComponent } from './chat-character-select.component';

describe('ChatCharacterSelectComponent', () => {
  let component: ChatCharacterSelectComponent;
  let fixture: ComponentFixture<ChatCharacterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatCharacterSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatCharacterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
