import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIdiomaComponent } from './header-idioma.component';

describe('HeaderIdiomaComponent', () => {
  let component: HeaderIdiomaComponent;
  let fixture: ComponentFixture<HeaderIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIdiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
