import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;

  userService = inject(UsersService);

  constructor(private fb: FormBuilder, private readonly router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const user = this.form.value as User;
    this.userService
      .login(user)
      .then(() => this.router.navigate(['/private']))
      .catch((err) => console.log(err));
  }

  onLoginGoogle() {
    this.userService
      .loginWithGoogle()
      .then((res) => {
        console.log(res);
        this.router.navigate(['/private']);
      })
      .catch((err) => console.log(err));
  }
}
