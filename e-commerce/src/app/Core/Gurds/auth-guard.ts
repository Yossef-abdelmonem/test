import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
    let _CookieService = inject(CookieService)
  let _Router = inject(Router)
  if(_CookieService.get('token')){
    return true
  }else{
    return _Router.parseUrl('/login')
  }
};
