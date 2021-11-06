import { Injectable, Inject, Optional } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Request } from 'express';
import { AuthService } from '../../services/auth.service';


@Injectable()
export class UniversalInterceptor implements HttpInterceptor {
  constructor(
    @Optional() @Inject(Request) protected request: Request,
    private authService:AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let serverReq: HttpRequest<any> = req;
    // Local /url gibi başlayan urller için başına kendi adresini ekle.
    if (this.request && !serverReq.url.startsWith('http')) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({ url: newUrl });
    }

   

    return next.handle(serverReq);
  }
}