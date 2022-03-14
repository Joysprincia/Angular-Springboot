import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideformComponent } from './guideform.component';

describe('GuideformComponent', () => {
  let component: GuideformComponent;
  let fixture: ComponentFixture<GuideformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
