import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableprojectComponent } from './tableproject.component';

describe('TableprojectComponent', () => {
  let component: TableprojectComponent;
  let fixture: ComponentFixture<TableprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
