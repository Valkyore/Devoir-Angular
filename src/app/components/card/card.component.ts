import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnInit {

  @Input() produits: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.produits = this.dataService.getProduits();
  }


}

