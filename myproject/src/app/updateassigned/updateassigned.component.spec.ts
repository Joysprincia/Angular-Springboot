import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateassignedComponent } from './updateassigned.component';

describe('UpdateassignedComponent', () => {
  let component: UpdateassignedComponent;
  let fixture: ComponentFixture<UpdateassignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateassignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
