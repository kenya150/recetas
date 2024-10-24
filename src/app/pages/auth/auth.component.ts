import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports:[CommonModule,FormsModule]
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
        this.auth.login(); // Aquí debes manejar el estado de autenticación
        this.router.navigate(['/home']); // Redirigir a la página de inicio
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    );
  }

  register(){
    this.router.navigate(['/register'])
  }
}
