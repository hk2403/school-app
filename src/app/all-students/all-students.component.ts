
import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {

  public students:any=[];
  constructor(private _studentsService:StudentsService){
    _studentsService.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  deleteStudent(id:any){
    this._studentsService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }


}
