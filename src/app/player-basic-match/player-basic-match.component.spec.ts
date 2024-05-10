import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicMatchComponent } from './player-basic-match.component';

describe('PlayerBasicMatchComponent', () => {
  let component: PlayerBasicMatchComponent;
  let fixture: ComponentFixture<PlayerBasicMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicMatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
