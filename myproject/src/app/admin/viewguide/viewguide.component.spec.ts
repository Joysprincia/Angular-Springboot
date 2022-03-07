import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewguideComponent } from './viewguide.component';

describe('ViewguideComponent', () => {
  let component: ViewguideComponent;
  let fixture: ComponentFixture<ViewguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
