import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...search: any[]): any {
    if(!search){
      return value
    }
    return value.filter((data:any) => this.match(data,search))
  }

  match(data:any,value:any){
    return Object.keys(data).map((key) => {
      return new RegExp(value,'gi').test(data[key])
    }).some(result => result)
  }

}

