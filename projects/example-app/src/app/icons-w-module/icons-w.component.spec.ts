import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsWComponent } from './icons-w.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsDComponent', () => {
  let component: IconsWComponent;
  let fixture: ComponentFixture<IconsWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsWComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
