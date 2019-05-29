import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class HttpTokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer your-bearer-token-here'
      }
    })
    return next.handle(tokenizedReq)
  }

}
