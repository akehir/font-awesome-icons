import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsEComponent } from './icons-e.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsEComponent', () => {
  let component: IconsEComponent;
  let fixture: ComponentFixture<IconsEComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsEComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
