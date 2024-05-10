import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicClassicComponent } from './player-basic-classic.component';

describe('PlayerBasicClassicComponent', () => {
  let component: PlayerBasicClassicComponent;
  let fixture: ComponentFixture<PlayerBasicClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicClassicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
