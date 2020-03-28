import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsCComponent } from './icons-c.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsCComponent', () => {
  let component: IconsCComponent;
  let fixture: ComponentFixture<IconsCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsCComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
