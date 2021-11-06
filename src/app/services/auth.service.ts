import { Injectable } from '@angular/core';
import { JWTTokenService } from './jwttoken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn  =false;
  
  constructor(private jwtTokenService:JWTTokenService) { }

  getJWTToken(){
    this.jwtTokenService.getDecodeToken();
  }
}
