import { Component, inject } from '@angular/core';
import { PostresService } from '../../services/postres.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { pasteles } from '../../app.interface';

@Component({
  selector: 'app-pasteles',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './pasteles.component.html',
  styleUrl: './pasteles.component.css'
})
export class PastelesComponent {

  title:string='POSTRES'
  private pastels=inject(PostresService)
  pastel:pasteles[]=[];
  constructor(){
    console.log('contructing');
    this.pastel = this.pastels.getsongs();
  }
}
