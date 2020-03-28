import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsVComponent } from './icons-v.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsVComponent', () => {
  let component: IconsVComponent;
  let fixture: ComponentFixture<IconsVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsVComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
