import { Component, inject } from '@angular/core';
import { PostresService } from '../../services/postres.service';
import { pastas} from '../../app.interface';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  title:string='PASTAS'
  private pastels=inject(PostresService)
  pastel:pastas[]=[];
  constructor(){
    console.log('contructing');
    this.pastel = this.pastels.getpas();
  }
}
