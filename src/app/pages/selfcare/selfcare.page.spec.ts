import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelfcarePage } from './selfcare.page';

describe('SelfcarePage', () => {
  let component: SelfcarePage;
  let fixture: ComponentFixture<SelfcarePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
