import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../users/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage implements OnInit {
  userService = inject(UsersService);

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onLoggout() {
    this.userService
      .loggout()
      .then(() => this.router.navigate(['/home']))
      .catch((err) => console.log(err));
  }
}
