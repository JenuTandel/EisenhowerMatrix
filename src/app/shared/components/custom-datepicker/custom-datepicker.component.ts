import { Component, Input, OnInit, Self } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { injectNgControl } from 'src/app/customControl';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     multi: true,
  //     useExisting: CustomDatepickerComponent,
  //   },
  // ],
})
export class CustomDatepickerComponent implements OnInit, ControlValueAccessor {
  @Input() isFormSubmitted:boolean;
  public dateValue: any;
  onTouched: () => void = () => {};
  onChange: (value: any) => void = () => {};
  public disabled!: boolean;
  public controlDir: NgControl;

  constructor() {
    this.isFormSubmitted = false;
    this.controlDir = injectNgControl();
    if (this.controlDir != null) {
      this.controlDir.valueAccessor = this;
    }
  }
  ngOnInit() {}
  writeValue(value: any): void {
    if (value) {
      this.dateValue = value;
    }
  }
  registerOnChange(onChange: () => void): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  onDateChange(e: any) {
    this.onChange(e.target.value);
  }
}
