import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/services/users.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from '../users/models/user';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage implements OnInit {
  $user = this.userService.$stateSession.pipe(map((user) => user));

  constructor(
    private readonly router: Router,
    private readonly userService: UsersService
  ) {}

  ngOnInit() {}

  onLoggout() {
    this.userService
      .loggout()
      .then(() => this.router.navigate(['/home']))
      .catch((err) => console.log(err));
  }
}
