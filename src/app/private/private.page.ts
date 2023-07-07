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
export class PrivatePage {}
