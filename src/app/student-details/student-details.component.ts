import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  public student:any={};
  public id:number=0;

  constructor(private _activatedRoute:ActivatedRoute, private _studentService:StudentsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        _studentService.getStudent(this.id).subscribe(
          (data:any)=>{
            this.student=data;
          }
        )
      }
    )
  }

}
