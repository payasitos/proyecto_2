import { Component } from '@angular/core';

// IMPORTAMOS INTERFAZ
import { Spiderman } from 'src/app/models/spiderman';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    // PROPIEDAD PUBLICA (TIPO ARRAY)
    public info: Spiderman[];

    constructor(){
      this.info = [
        {
          id: "",
          nombre: "peter parker",
          poder: "aracnidos",
          edad: 18,
          imagen: "https://lumiere-a.akamaihd.net/v1/images/marvelspidermanseries-emeagrid_45274dc0.jpeg?region=53,0,854,480",
        },
  
        {
          id: "",
          nombre: "miles morales",
          poder: "aracnidos",
          edad: 15,
          imagen: ""
        }
      ]
    }
    
}
