import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeIconComponent } from './icon.component';

describe('FontAwesomeIconComponent', () => {
  let component: FontAwesomeIconComponent;
  let fixture: ComponentFixture<FontAwesomeIconComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
