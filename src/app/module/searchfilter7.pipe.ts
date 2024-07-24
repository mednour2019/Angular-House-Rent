import { Pipe, PipeTransform } from '@angular/core';
import { maison } from '../models/maison';

@Pipe({
  name: 'searchfilter7'
})
export class Searchfilter7Pipe implements PipeTransform {

  transform(maisons:maison[],searchValue7:string): maison[] {
    if(!maisons||!searchValue7){
      return maisons;
    }
    return maisons.filter(maison=>maison.type.toLocaleLowerCase().includes(searchValue7.toLocaleLowerCase()));
    
  }

}
