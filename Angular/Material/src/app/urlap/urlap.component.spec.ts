import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlapComponent } from './urlap.component';

describe('UrlapComponent', () => {
  let component: UrlapComponent;
  let fixture: ComponentFixture<UrlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
