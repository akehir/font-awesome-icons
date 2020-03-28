import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsYComponent } from './icons-y.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsYComponent', () => {
  let component: IconsYComponent;
  let fixture: ComponentFixture<IconsYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsYComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
