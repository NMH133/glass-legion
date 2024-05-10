import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicMatchHistoryComponent } from './player-basic-match-history.component';

describe('PlayerBasicMatchHistoryComponent', () => {
  let component: PlayerBasicMatchHistoryComponent;
  let fixture: ComponentFixture<PlayerBasicMatchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicMatchHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicMatchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
