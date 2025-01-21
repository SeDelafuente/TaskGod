import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsabilityPage } from './responsability.page';

describe('ResponsabilityPage', () => {
  let component: ResponsabilityPage;
  let fixture: ComponentFixture<ResponsabilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
