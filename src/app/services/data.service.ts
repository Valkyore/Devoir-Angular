import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// données stockées pour l'utilisation des pipes de trie par prix et du filtre par nom

export class DataService {

  private produits = [
    {id:1, name: 'Figurine Astérix', price: 24, Image: 'asterix-figurine.jpg' },
    {id:2, name: 'Figurine Obélix', price: 23,Image:'obélix-figurine.webp'},
    {id:3, name: 'Figurine Falbala', price: 20,Image:'figurine-falbala.webp'},
    {id:4, name: 'Figurine Idéfix', price: 16,Image:'idéfix-figurine.jpg'},
    {id:5, name: 'Figurine Assurancetourix', price: 17,Image:'assurancetourix-figurine.jpg'},
    {id:6, name: 'Figurine Légionnaire', price: 18,Image:'figurine-legionnaire.jpg'},
    {id:7, name: 'Figurine Céasar', price: 22.85, Image:'figurine-césar.webp'},
    {id:8, name: 'Figurine cétautomatix', price: 19.40, Image:'figurine-cétautomatix.png'},
    {id:9, name: 'Figurine Abraracourcix', price: 22.85, Image:'abraracourcix.jpg'},
    {id:10, name: 'Figurine Ordralphabetix', price:19.45, Image:'figurine-ordrealphabetix.jpg'},
    {id:11, name: 'Figurine Panoramix', price: 23.50, Image:'panoramix.jpg'},
    {id:12, name: 'Figurine Bonemine', price:22.90, Image:'figurine-bonemine.jpg'}
  ];
  
  constructor() { }

  getProduits() {
    return this.produits
  }

  getProduitById(id: number): any {
    return this.produits.find(produit => produit.id === id);
  }
}
