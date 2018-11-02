import { Component } from '@angular/core';
import { CoursesService } from './courses.servise';

@Component({
    selector: 'courses',
    template: `
    {{ coruse.title | uppercase }} <br/>
    {{ course.rating }} <br/>
    {{ course.students }} <br/>
    {{ course.price }} <br/>
    {{ course.releaseDate }} <br/>

    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
    `
    
})
export class CoursesComponent {
    email = "me@example.com";
   onKeyUp() {
       console.log(this.email);
   }

   course = {
       title: "The complete Angular course",
       rating: 4.9745,
       students: 30123,
       price: 190.95,
       releaseDate: new Date(2016, 3, 1)
   }
} 