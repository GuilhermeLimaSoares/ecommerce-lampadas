import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstNamePipe'})
export class FirstNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').slice(0, 1).find(res => res !== 'undefined');
  }
}