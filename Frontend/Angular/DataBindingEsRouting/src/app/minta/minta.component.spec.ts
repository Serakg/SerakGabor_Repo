import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintaComponent } from './minta.component';

describe('MintaComponent', () => {
  let component: MintaComponent;
  let fixture: ComponentFixture<MintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
