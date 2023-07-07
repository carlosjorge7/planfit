import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
      .register(user)
      .pipe(
        first(),
        tap((res) => {
          console.log(res);
          if (res) {
            this.router.navigate(['users/login']);
          }
        })
      )
      .subscribe();
  }

  /**
   * To init form
   */
  private initForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
