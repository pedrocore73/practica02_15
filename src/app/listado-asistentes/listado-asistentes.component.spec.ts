import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAsistentesComponent } from './listado-asistentes.component';

describe('ListadoAsistentesComponent', () => {
  let component: ListadoAsistentesComponent;
  let fixture: ComponentFixture<ListadoAsistentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAsistentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAsistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
