import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonprojectComponent } from './buttonproject.component';

describe('ButtonprojectComponent', () => {
  let component: ButtonprojectComponent;
  let fixture: ComponentFixture<ButtonprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
