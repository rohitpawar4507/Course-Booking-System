import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { pipe } from 'rxjs';
import { CourseCard } from "../course-card/course-card";


@Component({
  selector: 'app-course-list',
  imports: [NgStyle, DatePipe, CurrencyPipe, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  title: string = "Avilable Courses";
  wishlist: any[] = [];
   courses = [
    { id: 1, title: 'Intro to Angular', description: 'Learn the basic of Angular', price: 49, date:'01-02-2025', soldOut:false, img:'angular-logo.png', onSale:true},
    { id: 2, title: 'Advaced Angular', description: 'Deep dive into Angular internals', price: 190, date:'01-04-2025',soldOut:true,img:'angular-logo.png', onSale:false},
    { id: 3, title: 'RxJS Fundamental', description: 'Asynchronous data streams', price: 45, date:'01-06-2025',soldOut:false, img:'RxJs-logo.png', onSale:true}


];

//adding hooks lifecycle 
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
   console.log('Courses List Initialized')
  
}

onCourseBooked(course: any):void{
  console.log('Parent heard about booking', course.title);

}


onWishlistAdded(course: any){
  console.log('Wishlist event triggered for:', course.title);
  this.wishlist.push(course);
}


}