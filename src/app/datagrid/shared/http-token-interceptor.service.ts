import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class HttpTokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer 3D9BBDEB-CB28-4724-A392-33EBF084EAF8'
      }
    })
    return next.handle(tokenizedReq)
  }

}
