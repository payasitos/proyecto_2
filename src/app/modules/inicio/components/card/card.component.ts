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
          id: "1",
          nombre: "peter parker",
          poder: "aracnidos",
          edad: 18,
          imagen: "https://i.pinimg.com/736x/76/68/e4/7668e4157cbcbc254b37c1c9cfc3228b.jpg",
        },
  
        {
          id: "2",
          nombre: "miles morales",
          poder: "aracnidos",
          edad: 15,
          imagen: "https://th.bing.com/th/id/R.0c33ea8e8f61ec6670af934b892a63dd?rik=PjmhSa44avcRzw&pid=ImgRaw&r=0"
        },

        {
          id: "3",
          nombre: "Gwen Stacy",
          poder: "aracnidos",
          edad: 16,
          imagen: "https://i.pinimg.com/originals/1b/2f/f6/1b2ff6abd560d0ac2ad0b5da71aa0c31.jpg"
        },
      ]
    }
    
}
