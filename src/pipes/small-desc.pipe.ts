import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'smallDescPipe'})
export class SmallDescPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 40).concat('...');
  }
}