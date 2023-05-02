import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  authState,
} from '@angular/fire/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly auth: Auth) {}

  $stateSession = authState(this.auth);

  public register(user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  public login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  public loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  public loggout() {
    return signOut(this.auth);
  }
}
