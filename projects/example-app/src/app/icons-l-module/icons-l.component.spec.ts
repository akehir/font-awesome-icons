import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLComponent } from './icons-l.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsLComponent', () => {
  let component: IconsLComponent;
  let fixture: ComponentFixture<IconsLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsLComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
