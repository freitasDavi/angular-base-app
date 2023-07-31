import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  loginForm!: FormGroup;

  constructor (private authService: AuthService ) {}

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
    if (this.loginForm.invalid) {
      alert("Invalid");
      return;
    }

    console.log('Enviando', this.loginForm.value);
    
    await this.authService.login({ 
      login: this.loginForm.get('login')!.value,
      password: this.loginForm.get('password')!.value, }
      )
      .subscribe();

  }
}
