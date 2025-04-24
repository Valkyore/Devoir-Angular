import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(produits: any[], searchTerm: string): any[] {
    if (!produits || !searchTerm) return produits;

    const lowerTerm = searchTerm.toLowerCase();

    return produits.filter(p => p.name.toLowerCase().includes(lowerTerm)
    );
  }

}
