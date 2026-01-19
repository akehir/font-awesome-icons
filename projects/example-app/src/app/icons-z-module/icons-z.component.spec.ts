import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsZComponent } from './icons-z.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsZComponent', () => {
  let component: IconsZComponent;
  let fixture: ComponentFixture<IconsZComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsZComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
