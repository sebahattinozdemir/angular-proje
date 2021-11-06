import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JWTTokenService } from './services/jwttoken.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';

  constructor(
    private jwt: JWTTokenService,
    private auth: AuthService,
    private local: LocalStorageService
  ) {}
  ngOnInit(): void {
    let token = this.local.get('token');

    if (token != null) {
      let data = JSON.parse(token);
      this.jwt.setToken(data);
    }
    if (this.jwt.getUser()) {
      this.auth.loggedIn = true;
    } else {
      this.auth.loggedIn = false;
    }
  }
}
