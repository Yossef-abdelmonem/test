import { HttpInterceptorFn } from '@angular/common/http';

export const erorrInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
