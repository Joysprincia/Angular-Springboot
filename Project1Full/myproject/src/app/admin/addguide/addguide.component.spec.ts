import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddguideComponent } from './addguide.component';

describe('AddguideComponent', () => {
  let component: AddguideComponent;
  let fixture: ComponentFixture<AddguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
