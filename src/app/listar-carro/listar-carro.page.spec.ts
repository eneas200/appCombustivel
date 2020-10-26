import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarCarroPage } from './listar-carro.page';

describe('ListarCarroPage', () => {
  let component: ListarCarroPage;
  let fixture: ComponentFixture<ListarCarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCarroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
