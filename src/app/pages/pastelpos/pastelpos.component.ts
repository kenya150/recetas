import { Component, inject } from '@angular/core';
import { PostresService } from '../../services/postres.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ingredientes } from '../../app.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pastelpos',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './pastelpos.component.html',
  styleUrls: ['./pastelpos.component.css']
})
export class PastelposComponent {
  title: string = 'PROCESO DE PREPARACIÓN';
  pasos: ingredientes | null | undefined; // Cambia aquí
  private _activeRouter = inject(ActivatedRoute);
  private _postresService = inject(PostresService);

  constructor() {
    this._activeRouter.params.subscribe(param => {
      const pastelId = +param['pastelid'];
      console.log('Pasteles:', this._postresService.pastel);
      console.log('ensalada:', this._postresService.ensalada);
      console.log('pasta:', this._postresService.pasta);
      console.log('nino:', this._postresService.nino);
      console.log('desayuno',this._postresService.desayuno);
      console.log('Pastel ID:', pastelId);
      
      // Llama al método del servicio
      this.pasos = this._postresService.getIngredientesByPastelId(pastelId);
      
      console.log('Ingredientes obtenidos:', this.pasos); // Verifica los ingredientes obtenidos
      
      if (!this.pasos) {
        console.log('No se encontraron ingredientes para el pastel seleccionado');
      }
    });
  }
}
