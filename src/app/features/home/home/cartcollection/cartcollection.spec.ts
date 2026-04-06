import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartcollection } from './cartcollection';

describe('Cartcollection', () => {
  let component: Cartcollection;
  let fixture: ComponentFixture<Cartcollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartcollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartcollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
