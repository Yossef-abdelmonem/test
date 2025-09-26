import { IProduct } from './../../../../../src/app/core/interfaces/iproduct.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

   transform(products: IProduct[], searchTerm: string): IProduct[] {
    if (!products || !searchTerm) {
      return products;
    }

    searchTerm = searchTerm.toLowerCase().trim();

    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.category.name.toLowerCase().includes(searchTerm)
    );
  }

}
