import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private idToken = null;

  public getIdToken() {
    return this.idToken;
  }

  constructor(private auth: AngularFireAuth) {
    this.auth.idToken.subscribe((token) => {
      this.idToken = token;
    })
  }
}
