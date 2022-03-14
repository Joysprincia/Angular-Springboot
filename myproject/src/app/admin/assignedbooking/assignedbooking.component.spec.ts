import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedbookingComponent } from './assignedbooking.component';

describe('AssignedbookingComponent', () => {
  let component: AssignedbookingComponent;
  let fixture: ComponentFixture<AssignedbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
