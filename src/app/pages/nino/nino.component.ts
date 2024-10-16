import { Component, inject } from '@angular/core';
import { PostresService } from '../../services/postres.service';
import { ninos } from '../../app.interface';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-nino',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './nino.component.html',
  styleUrl: './nino.component.css'
})
export class NinoComponent {
  title:string='NIÑOS'
  private pastels=inject(PostresService)
  pastelitos:ninos[]=[];
  constructor(){
    console.log('contructing');
    this.pastelitos = this.pastels.getnino();
  }
}
