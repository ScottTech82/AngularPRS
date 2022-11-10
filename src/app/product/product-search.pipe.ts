import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(product: Product[], search: string = ""): Product[] {
    let selected: Product[] = [];
    for(let p of product) {
      if(p.name.toLowerCase().includes(search)
      || (p.partNbr !== null && p.partNbr.toLowerCase().includes(search))
      || (p.vendor.name !== null && p.vendor.name.toLowerCase().includes(search))) {
        selected.push(p);
      }
    }

    return selected;
  }

}
