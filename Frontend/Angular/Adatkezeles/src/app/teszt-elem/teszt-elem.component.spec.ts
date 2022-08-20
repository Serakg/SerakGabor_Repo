import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesztElemComponent } from './teszt-elem.component';

describe('TesztElemComponent', () => {
  let component: TesztElemComponent;
  let fixture: ComponentFixture<TesztElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesztElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesztElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
