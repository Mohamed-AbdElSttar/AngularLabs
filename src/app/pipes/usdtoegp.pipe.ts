import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoegp'
})
export class UsdtoegpPipe implements PipeTransform {

  transform(value: number, exchangeRate: number=15.5):string {
    return value*exchangeRate+' EGP';
  }

}
