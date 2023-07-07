import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  private readonly userService = inject(UsersService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  ngOnInit() {
    this.initForm();
  }

  /**
   * To cal aapi
   */
  public onSubmit(): void {
    const user = this.form.value as User;
    this.userService
      .login(user)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
      });
  }

  /**
   * To init form
   */
  private initForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
