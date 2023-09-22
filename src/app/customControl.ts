import { inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
} from '@angular/forms';

export class NoopValueAccessor implements ControlValueAccessor {
  writeValue() {}
  registerOnChange() {}
  registerOnTouched() {}
}

export function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) throw new Error('...');

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    ngControl.valueAccessor = new NoopValueAccessor();

    return ngControl;
  }

  throw new Error(`...`);
}
