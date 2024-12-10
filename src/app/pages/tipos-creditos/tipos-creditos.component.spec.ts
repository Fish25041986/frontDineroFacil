import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposCreditosComponent } from './tipos-creditos.component';

describe('TiposCreditosComponent', () => {
  let component: TiposCreditosComponent;
  let fixture: ComponentFixture<TiposCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposCreditosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
