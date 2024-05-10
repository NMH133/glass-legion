import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloBoxComponent } from './elo-box.component';

describe('EloBoxComponent', () => {
  let component: EloBoxComponent;
  let fixture: ComponentFixture<EloBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EloBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EloBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
