import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc'){
    const sorted = [...value];
    if (direction === 'asc') {
      sorted.sort((a, b) => {
        return a < b ? 1 : -1;
      });
    } else {
      sorted.sort((a, b) => {
        return a > b ? -1 : 1;
      });
    }
    return sorted;
  }

}
