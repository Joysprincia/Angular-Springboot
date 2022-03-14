import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignguideComponent } from './assignguide.component';

describe('AssignguideComponent', () => {
  let component: AssignguideComponent;
  let fixture: ComponentFixture<AssignguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
