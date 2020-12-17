import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(base: number, exponente: number ): number {
    return Math.pow(base, exponente);
  }

}
