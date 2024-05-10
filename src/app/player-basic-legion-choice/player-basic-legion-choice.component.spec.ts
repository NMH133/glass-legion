import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicLegionChoiceComponent } from './player-basic-legion-choice.component';

describe('PlayerBasicLegionChoiceComponent', () => {
  let component: PlayerBasicLegionChoiceComponent;
  let fixture: ComponentFixture<PlayerBasicLegionChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicLegionChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicLegionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
