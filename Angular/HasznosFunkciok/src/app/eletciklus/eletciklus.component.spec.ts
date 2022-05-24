import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletciklusComponent } from './eletciklus.component';

describe('EletciklusComponent', () => {
  let component: EletciklusComponent;
  let fixture: ComponentFixture<EletciklusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletciklusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletciklusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
