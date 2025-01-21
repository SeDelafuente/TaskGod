import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageAdminPage } from './homepage-admin.page';

describe('HomepageAdminPage', () => {
  let component: HomepageAdminPage;
  let fixture: ComponentFixture<HomepageAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
