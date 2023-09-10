import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentForm: FormGroup=new FormGroup({
    name: new FormControl(),
    fatherName: new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address: new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
    }),
    class:new FormControl(),
    percentage:new FormControl(),
    // marks:
    type:new FormControl(),
    busFee:new FormControl(),
    hostelFee:new FormControl(),
    conduct:new FormControl()
  });
  constructor(private studentsService:StudentsService){}
  create(){
    console.log(this.studentForm.value);
    this.studentsService.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("New Student Created Successfully!")
      },
      (err:any)=>{
        alert("Error! Something is wrong.")
      }
    )

  }

}
