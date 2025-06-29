import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [ DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})

export class CourseCard {
  @Input() course:any;

  viewDetils(title: string): void{
  alert(`Viewing details for ${title}`)
}
}



