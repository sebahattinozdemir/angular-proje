import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { JWTTokenService } from 'src/app/services/jwttoken.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;

  validForm: boolean = false;

  @Output() closeModal = new EventEmitter<String>();

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private messageService: MessageService,
    private router: Router,
    private jwt: JWTTokenService,
    private auth: AuthService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.formBuild();
  }

  close() {
    this.closeModal.emit();
  }

  formBuild() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
    });

    this.loginForm.valueChanges.subscribe((obj: any) => {
      this.validForm = this.loginForm.valid;
    });
  }

  onSubmit() {
    //login simulation
    this.loadingService.show();
    if (this.username.value == 'user' && this.password.value == 'user123') {
      setTimeout(() => {
        this.loadingService.hide();
      }, 1000);

      // simulate token
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

      this.storage.set('token', JSON.stringify(token));
      this.auth.loggedIn = true;
      setTimeout(() => {
        this.close();
        this.router.navigate(['/product']);
      }, 1500);
    } else {
      setTimeout(() => {
        this.loadingService.hide();
      }, 1000);

      setTimeout(() => {
        this.messageService.show(
          'Error',
          'Password or username is incorrect',
          'error'
        );
      }, 2000);
    }
  }

  get username() {
    return this.loginForm.get('username')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }
}
