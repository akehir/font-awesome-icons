import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsQComponent } from './icons-q.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsQComponent', () => {
  let component: IconsQComponent;
  let fixture: ComponentFixture<IconsQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsQComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
