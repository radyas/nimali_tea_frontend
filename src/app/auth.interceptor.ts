import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {NbAuthService} from '@nebular/auth';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: NbAuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token;
    this.authService.getToken().subscribe((auth: any) => token = auth.token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
        },
      });
    }

    return next.handle(req);
  }
}
