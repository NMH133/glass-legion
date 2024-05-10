import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicComponent } from './player-basic.component';

describe('PlayerBasicComponent', () => {
  let component: PlayerBasicComponent;
  let fixture: ComponentFixture<PlayerBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
