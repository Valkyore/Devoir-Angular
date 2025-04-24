import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName',
  standalone: false
})
export class SortByNamePipe implements PipeTransform {

  transform(produits: any[], field: string = 'name', order: 'asc' | 'desc' = 'asc'): any[] {
    if (!produits || !field) return produits;

    return [...produits].sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

}