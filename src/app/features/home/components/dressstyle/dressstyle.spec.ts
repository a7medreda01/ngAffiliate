import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dressstyle } from './dressstyle';

describe('Dressstyle', () => {
  let component: Dressstyle;
  let fixture: ComponentFixture<Dressstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dressstyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dressstyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
