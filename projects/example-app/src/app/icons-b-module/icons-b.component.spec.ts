import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBComponent } from './icons-b.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsBComponent', () => {
  let component: IconsBComponent;
  let fixture: ComponentFixture<IconsBComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsBComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
