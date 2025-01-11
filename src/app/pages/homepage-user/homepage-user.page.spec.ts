import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageUserPage } from './homepage-user.page';

describe('HomepageUserPage', () => {
  let component: HomepageUserPage;
  let fixture: ComponentFixture<HomepageUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
