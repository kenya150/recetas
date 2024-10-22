import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private r: Router) {}

  login() {
    // Lógica de inicio de sesión que obtienes de Laravel
    this.isLoggedInSubject.next(true);
    this.r.navigate(['/home'])
  }

  logout() {
    this.isLoggedInSubject.next(false);
  }

  // Verifica si el usuario está autenticado
  isAuthenticated() {
    return this.isLoggedInSubject.getValue();
  }
}
