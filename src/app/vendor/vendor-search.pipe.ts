import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendor: Vendor[], search: string = ""): Vendor[] {
    let selected: Vendor[] = [];
    for(let v of vendor) {
      if(v.name.toLowerCase().includes(search) 
      || (v.email !== null && v.email.toLowerCase().includes(search))
      || (v.code !== null && v.code.toLowerCase().includes(search))) {
        selected.push(v);
      }
    }
    return selected;
  }

}
