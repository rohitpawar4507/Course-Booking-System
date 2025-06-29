import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard } from './course-card';
import { CurrencyPipe, DatePipe } from '@angular/common';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard, DatePipe, CurrencyPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
