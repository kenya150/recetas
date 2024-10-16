import { Component, inject, Inject, Input, input } from '@angular/core';
import { pasteles} from '../../app.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() pasteles! :pasteles;
  private _router = inject(Router);
  recibeid(id:number){
    console.log("pastel con id "+ id);
    this._router.navigateByUrl('/pastelpos/'+id)

  }
}