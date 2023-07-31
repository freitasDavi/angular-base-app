import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  loginForm!: FormGroup;

  constructor (
    private authService: AuthService,
    private notificationService: NotificationsService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    })
  }

  get login () {
    return this.loginForm.get('login')!;
  }

  get password () {
    return this.loginForm.get('password')!;
  }

  async onSubmit() {
    var me = this;

    if (this.loginForm.invalid) { 
      this.notificateError("Alguma informação não está correta");
      return;
    }

    console.log('Enviando', this.loginForm.value);
    
    await this.authService.login({ 
      login: this.loginForm.get('login')!.value,
      password: this.loginForm.get('password')!.value, }
      )
      .subscribe({
        next: (res) => {
          me.authService.storeToken(res.token);
          me.notificateSuccess();
          me.router.navigateByUrl("/");
        },
        error(err) {
          console.error(err);
          me.notificateError('Oopa deu ruim');
        },
      });
  }

  notificateError (errorMessage: string): void {
    this.notificationService.addWarningNotification({
      title: "Ops!",
      message: errorMessage
    })
  }

  notificateSuccess (): void {
    this.notificationService.addSuccessNotification({
      title: "Login",
      message: "Login realizado com sucesso, redirecionando..."
    })
  }
}
