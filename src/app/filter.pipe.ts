// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
        const val = it.title.replace(/\s+/g, '');
        if(val.toLocaleLowerCase().includes(searchText)){
            return val.toLocaleLowerCase().includes(searchText);
        }
        else{
            return null;
        }
    });
  }
}