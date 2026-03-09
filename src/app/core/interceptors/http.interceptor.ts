import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
    return next(req);
  }

  const apiReq = req.clone({
    url: `${environment.api}${req.url}`
  });

  return next(apiReq);
};