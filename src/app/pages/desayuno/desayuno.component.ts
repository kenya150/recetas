import { Component, inject } from '@angular/core';
import { PostresService } from '../../services/postres.service';
import { desayunos } from '../../app.interface';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-desayuno',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './desayuno.component.html',
  styleUrl: './desayuno.component.css'
})
export class DesayunoComponent {
  title:string='DESAYUNOS'
  private pastels=inject(PostresService)
  pastel:desayunos[]=[];
  constructor(){
    console.log('contructing');
    this.pastel = this.pastels.getdesa();
  }
}
