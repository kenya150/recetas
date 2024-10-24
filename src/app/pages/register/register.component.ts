import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://127.0.0.1:8000/api/register', user).subscribe(
      (response: any) => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/auth']); // Redirige a la página de login
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }
}
