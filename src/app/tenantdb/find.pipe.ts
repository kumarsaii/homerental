import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(house: any[], searchterm: any): any {
    if(!searchterm)
    {
      return house;
    }
    else
    {
      return house.filter(house=>house.location.toLowercase().indexOf(searchterm.toLowercase())!=-1)
    }
  }

}
