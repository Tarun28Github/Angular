import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const loggerData =  localStorage.getItem('LoginUser');
  const router = inject(Router);
  if(loggerData != null){
    return true;
  }
  else{
    router.navigateByUrl('login');
    return false;
  }
  
};
