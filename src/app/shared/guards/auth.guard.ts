import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JWTTokenService } from '../../services/jwttoken.service';

@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private auth: AuthService,
    private jwtService: JWTTokenService
  ) {}
  canActivate() {
    if (this.jwtService.getUser()) {
      if (this.jwtService.isTokenExpired()) {
        // Should Redirect Sig-In Page
        this.router.navigate(['/']);
      } else {
       
        return true;
      }
    } else {
      this.router.navigate(['/']);
    }
  }
}
