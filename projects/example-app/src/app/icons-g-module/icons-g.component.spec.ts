import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGComponent } from './icons-g.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsGComponent', () => {
  let component: IconsGComponent;
  let fixture: ComponentFixture<IconsGComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsGComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
