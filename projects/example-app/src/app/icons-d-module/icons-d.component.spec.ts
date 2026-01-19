import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDComponent } from './icons-d.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsDComponent', () => {
  let component: IconsDComponent;
  let fixture: ComponentFixture<IconsDComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ IconsDComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents()
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
