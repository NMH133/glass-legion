import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicFriendsComponent } from './player-basic-friends.component';

describe('PlayerBasicFriendsComponent', () => {
  let component: PlayerBasicFriendsComponent;
  let fixture: ComponentFixture<PlayerBasicFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicFriendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
