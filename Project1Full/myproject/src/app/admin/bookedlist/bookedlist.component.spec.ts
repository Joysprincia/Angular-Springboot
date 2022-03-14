import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedlistComponent } from './bookedlist.component';

describe('BookedlistComponent', () => {
  let component: BookedlistComponent;
  let fixture: ComponentFixture<BookedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
