import { Component } from '@angular/core';
import { RandomUsersService } from '../random-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-app',
  templateUrl: './message-app.component.html',
  styleUrls: ['./message-app.component.css']
})
export class MessageAppComponent {
  public term: any = "";
  public users: any = [];

  constructor(private _randomUsersService: RandomUsersService, private _router: Router) {
    _randomUsersService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("Error!");
      }
    )
  }

  // getFilteredUsers() {
  //   this.users.results = this.users.results.filter(
  //     (value: any) => value.name.first.toLowerCase().includes(this.term.toLowerCase()) || value.name.last.toLowerCase().includes(this.term.toLowerCase())
  //   );
  //   console.log(this.users);

  //   const filteredResults = this.users.results.filter(
  //     (value: any) =>
  //       value.name.first.toLowerCase().includes(this.term.toLowerCase()) ||
  //       value.name.last.toLowerCase().includes(this.term.toLowerCase())
  //   );
  
  //   // Update the user's results with the filtered results
  //   this.users.results = filteredResults;


  // }
  

}
