import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeckDetailsComponent } from './deck-details.component';

describe('DeckDetailsComponent', () => {
  let component: DeckDetailsComponent;
  let fixture: ComponentFixture<DeckDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DeckDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
