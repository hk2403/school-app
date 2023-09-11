
import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {

  public students:any=[];
  public term:any="";
  public column:string="";
  public order:string="";
  public limit:number=0;
  public page:number=0;
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
  deleteStudent(id:number){
    this._studentsService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getFilteredStudents(){
    this._studentsService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getSortedStudents(){
    this._studentsService.getSortedStudents(this.column, this.column).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }
  getPagedStudents(){
    this._studentsService.getPagedStudents(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }


}
