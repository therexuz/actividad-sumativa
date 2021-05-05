import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNOtaComponent } from './editar-nota.component';

describe('EditarNOtaComponent', () => {
  let component: EditarNOtaComponent;
  let fixture: ComponentFixture<EditarNOtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNOtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNOtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
