import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportalasComponent } from './importalas.component';

describe('ImportalasComponent', () => {
  let component: ImportalasComponent;
  let fixture: ComponentFixture<ImportalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
