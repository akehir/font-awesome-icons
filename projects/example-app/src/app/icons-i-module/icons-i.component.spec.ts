import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsIComponent } from './icons-i.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsIComponent', () => {
  let component: IconsIComponent;
  let fixture: ComponentFixture<IconsIComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsIComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
