import { Component, inject } from '@angular/core';
import { PostresService } from '../../services/postres.service';
import { ensaladas} from '../../app.interface';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-ensalada',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './ensalada.component.html',
  styleUrl: './ensalada.component.css'
})
export class EnsaladaComponent {
  title:string='Ensaladas';
  private pastels=inject(PostresService)
  pastel:ensaladas[]=[];
  constructor(){
    console.log('contructing');
    this.pastel = this.pastels.getensa();
  }
}
