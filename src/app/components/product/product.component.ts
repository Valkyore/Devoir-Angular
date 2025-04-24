import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  produit: any;
  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.produit= this.dataService.getProduitById(id);
    console.log('Produit récupéré :', this.produit);
  }

}
