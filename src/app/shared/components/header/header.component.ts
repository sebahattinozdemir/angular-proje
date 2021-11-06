import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JWTTokenService } from 'src/app/services/jwttoken.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoginModalOpen: boolean = false;
  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private jwt:JWTTokenService,
    private storage:LocalStorageService
  ) {}

  ngOnInit(): void {}

  openModal() {
    this.isLoginModalOpen = true;
  }

  closeModal() {
    this.isLoginModalOpen = false;
  }

  logOut() {
    //log out simulation
    this.loadingService.show();
    this.storage.remove("token");
    setTimeout(() => {
      this.auth.loggedIn = false;
      this.router.navigate(['/']);
      this.loadingService.hide();
    }, 1000);
  }
}
