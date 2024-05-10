import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBasicFriendComponent } from './player-basic-friend.component';

describe('PlayerBasicFriendComponent', () => {
  let component: PlayerBasicFriendComponent;
  let fixture: ComponentFixture<PlayerBasicFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerBasicFriendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerBasicFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
