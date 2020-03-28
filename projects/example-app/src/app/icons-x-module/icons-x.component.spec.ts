import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsXComponent } from './icons-x.component';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

describe('IconsXComponent', () => {
  let component: IconsXComponent;
  let fixture: ComponentFixture<IconsXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsXComponent ],
      imports: [
        FontAwesomeIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
