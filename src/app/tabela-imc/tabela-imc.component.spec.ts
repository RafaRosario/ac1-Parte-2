import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaIMCComponent } from './tabela-imc.component';
describe('TabelaIMCComponent', () => {
  let component: TabelaIMCComponent;
  let fixture: ComponentFixture<TabelaIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaIMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
