import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://127.0.0.1:8000/api/login', credentials).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso', response);
        this.auth.login()
      },
      (error) => {
        // Si hay un error, mostrar un mensaje
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
