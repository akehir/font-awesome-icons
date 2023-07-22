import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPComponent } from './icons-p.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsPComponent', () => {
  let component: IconsPComponent;
  let fixture: ComponentFixture<IconsPComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
