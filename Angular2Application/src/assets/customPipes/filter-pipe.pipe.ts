import { Pipe, PipeTransform } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operator/map';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(countires: any[], searchText: string): any {
     if (!countires) { return []; }
    if (!searchText) { return countires; }
    return countires.filter((i) => {
      return i.name.toLowerCase().includes(searchText);
    });
  }

}
