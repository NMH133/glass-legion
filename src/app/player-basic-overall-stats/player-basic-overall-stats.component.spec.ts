import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicOverallStatsComponent } from './player-basic-overall-stats.component';

describe('PlayerBasicOverallStatsComponent', () => {
  let component: PlayerBasicOverallStatsComponent;
  let fixture: ComponentFixture<PlayerBasicOverallStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicOverallStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicOverallStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
