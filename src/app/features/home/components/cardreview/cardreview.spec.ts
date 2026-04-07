import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardreview } from './cardreview';

describe('Cardreview', () => {
  let component: Cardreview;
  let fixture: ComponentFixture<Cardreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
