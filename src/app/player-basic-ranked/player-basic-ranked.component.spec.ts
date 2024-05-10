import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicRankedComponent } from './player-basic-ranked.component';

describe('PlayerBasicRankedComponent', () => {
  let component: PlayerBasicRankedComponent;
  let fixture: ComponentFixture<PlayerBasicRankedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicRankedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicRankedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
