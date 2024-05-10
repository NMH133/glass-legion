import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicActivityComponent } from './player-basic-activity.component';

describe('PlayerBasicActivityComponent', () => {
  let component: PlayerBasicActivityComponent;
  let fixture: ComponentFixture<PlayerBasicActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
