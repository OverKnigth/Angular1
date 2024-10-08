import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegosComponent } from './videojuegos.component';

describe('VideojuegosComponent', () => {
  let component: VideojuegosComponent;
  let fixture: ComponentFixture<VideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
