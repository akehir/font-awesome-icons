import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMComponent } from './icons-m.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsMComponent', () => {
  let component: IconsMComponent;
  let fixture: ComponentFixture<IconsMComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsMComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
