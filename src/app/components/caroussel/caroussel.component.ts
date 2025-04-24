import { Component } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  standalone: false,
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.css'
})
export class CarousselComponent {
  images = [
    'asterix-figurine.jpg',
    'idéfix-figurine.jpg',
    'figurine-legionnaire.jpg'
  ];
}