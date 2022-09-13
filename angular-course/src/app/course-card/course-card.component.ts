import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

@Input()
course:Course;
@Input()
cardIndex:number;

@Output('courseSelected')
courseEmitter = new EventEmitter<Course>();

  constructor() { }

  onCourseViewed(){
    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }
  imageIsVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }
  cardStyles(){
    return {'background' : 'url('+ this.course.iconUrl + ') no-repeat center center / cover'}
  }

  ngOnInit(): void {
  }

}
