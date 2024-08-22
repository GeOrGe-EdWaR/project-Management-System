import { Pipe, PipeTransform } from '@angular/core';

import { FormControl } from '@angular/forms';

@Pipe({
  name: 'processFormErrors',
})
export class ProcessFormErrorsPipe implements PipeTransform {
  transform(control: FormControl): string {
    const errorsPriorities = [
      'required',
      'minlength',
      'maxlength',
      'min',
      'max',
      'email',
      'pattern',
      'notMatch'
    ];

    const controlErrors = control.errors ?? {};

    for (const error of errorsPriorities) {
      if (controlErrors[error]) {
        return error;
      }
    }

    return '';
  }
}
