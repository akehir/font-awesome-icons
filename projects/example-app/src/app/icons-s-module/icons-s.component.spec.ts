import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSComponent } from './icons-s.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsSComponent', () => {
  let component: IconsSComponent;
  let fixture: ComponentFixture<IconsSComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsSComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
