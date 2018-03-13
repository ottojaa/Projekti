import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'duplicates',
  pure: false
})
export class DuplicatesPipe implements PipeTransform {
  //filtteröi duplikaatit (käyttäjä asettaa filtteriparametrin)
  transform(items: any[], args: any[]): any {
    return _.uniqBy(items, args);
  }

}
