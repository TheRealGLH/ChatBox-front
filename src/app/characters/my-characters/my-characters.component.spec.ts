import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharactersComponent } from './my-characters.component';

describe('MyCharactersComponent', () => {
  let component: MyCharactersComponent;
  let fixture: ComponentFixture<MyCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
