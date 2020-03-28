import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        FontAwesomeIconsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular FontAwesome Lazy Loaded Icon Lib'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular FontAwesome Lazy Loaded Icon Lib');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular FontAwesome Lazy Loaded Icon Lib');
  });
});
