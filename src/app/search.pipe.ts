import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class searchpipe implements PipeTransform {

  
    transform(houses: any[], searchWord: string): any {
    //   if(!searchWord)
    //   {
    //     return houses;
    //   }
    //   else{
    //     return houses.filter(searchedElement=>
    //       searchedElement.house.toLowerCase().indexOf(searchWord.toLowerCase())!=-1||
    //       searchedElement.address.toLowerCase().indexOf(searchWord.toLowerCase())!=-1||
    //       searchedElement.rent.tostring().indexOf(searchWord.toLowerCase())!=-1
    //       )
    //   }
     }    
   
  }
