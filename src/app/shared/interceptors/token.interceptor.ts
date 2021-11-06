import { Injectable, Inject, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Request } from 'express';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    @Optional() @Inject(Request) protected request: Request,
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getJWTToken();
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(req);
  }
}
