import { Component } from '@angular/core';
import { RandomUsersService } from '../random-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-app',
  templateUrl: './message-app.component.html',
  styleUrls: ['./message-app.component.css']
})
export class MessageAppComponent {
  public term:any="";
  public users:any=[];
  constructor(private _randomUsersService:RandomUsersService, private _router:Router){
    _randomUsersService.getUsers().subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Error!");
      }
    )
  }

  getFilteredUsers(){
    this._randomUsersService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal Service Error");
      }
    )
  }

}
