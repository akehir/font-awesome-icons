import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsKComponent } from './icons-k.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsKComponent', () => {
  let component: IconsKComponent;
  let fixture: ComponentFixture<IconsKComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsKComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
