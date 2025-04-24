import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: false
})
export class SortByPricePipe implements PipeTransform {

  transform(produits: any[], field: string = 'price', order: 'asc' | 'desc' = 'asc'): any[] {
    if (!produits || !field) return produits;

    return [...produits].sort((a: any, b: any) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      else if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      else return 0;
    });
  }

}
