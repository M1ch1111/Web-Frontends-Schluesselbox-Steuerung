import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../shared/auth';

export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value !== 'string') {
      return null;
    }
    const hasWhitespace = /\s/.test(value);
    return hasWhitespace ? { hasWhitespace: true } : null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [ReactiveFormsModule]
})
export class Login {
  login_error = false;

  loginForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), noWhitespaceValidator()]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)]
    })
  });

  private auth = inject(AuthService);
  private router = inject(Router);

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.getRawValue();
    const success = await this.auth.login(username, password);

    if (success) {
      this.login_error = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.login_error = true;
    }
  }
}
