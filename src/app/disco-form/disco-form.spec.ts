import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoForm } from './disco-form';

describe('DiscoForm', () => {
  let component: DiscoForm;
  let fixture: ComponentFixture<DiscoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
