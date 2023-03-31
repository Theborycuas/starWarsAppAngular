import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosCheroicaComponent } from './cambios-cheroica.component';

describe('CambiosCheroicaComponent', () => {
  let component: CambiosCheroicaComponent;
  let fixture: ComponentFixture<CambiosCheroicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiosCheroicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiosCheroicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
