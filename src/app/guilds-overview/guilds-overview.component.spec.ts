import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildsOverviewComponent } from './guilds-overview.component';

describe('GuildsOverviewComponent', () => {
  let component: GuildsOverviewComponent;
  let fixture: ComponentFixture<GuildsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuildsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuildsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
