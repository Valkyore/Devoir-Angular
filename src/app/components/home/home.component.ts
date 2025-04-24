import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produits: any[] = [];
  sortField: string = 'price';
  sortOrder: 'asc' | 'desc' = 'asc';
  searchTerm: string ='';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.produits = this.dataService.getProduits();
  }

toggleOrder() {
  this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
}

}

