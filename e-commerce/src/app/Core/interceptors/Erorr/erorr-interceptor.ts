import { ToastrService } from 'ngx-toastr';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const erorrInterceptor: HttpInterceptorFn = (req, next) => {


  let _ToastrService = inject(ToastrService)


  // RxJs

  // /Req

  return next(req).pipe(  catchError( (err)=>{

    // Logic
    _ToastrService.error(err.error.message , err.error.statusMsg)



    return throwError( ()=> err )
  } )  )  ; //Res
};
