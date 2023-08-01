import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadClientesComponent } from './cad-clientes.component';

describe('CadClientesComponent', () => {
  let component: CadClientesComponent;
  let fixture: ComponentFixture<CadClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadClientesComponent]
    });
    fixture = TestBed.createComponent(CadClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
