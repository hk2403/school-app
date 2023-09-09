import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password: new FormControl()
  });

  constructor(private _loginService:LoginService, private _router:Router){}
  login(){
    this._loginService.doLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Success");
        this._router.navigateByUrl("/dashboard");
        localStorage.setItem('token',data.token);
      },
      (err:any)=>{
        alert("Login Failed");
      }
    )
  }

}
