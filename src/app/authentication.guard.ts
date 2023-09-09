import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')){
    return true;
  }
  else{
    alert("Login Required to access this page!");
    var _router:Router= new Router();
    _router.navigateByUrl('/login');
    return false;
  }
};
