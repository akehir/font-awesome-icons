import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsHComponent } from './icons-h.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsHComponent', () => {
  let component: IconsHComponent;
  let fixture: ComponentFixture<IconsHComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsHComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
