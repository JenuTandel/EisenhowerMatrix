import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LabelPipe } from './pipes/label.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CustomDatepickerComponent } from './components/custom-datepicker/custom-datepicker.component';

@NgModule({
  declarations: [
    CardComponent,
    LabelPipe,
    SearchPipe,
    CustomDatepickerComponent,
  ],
  imports: [CommonModule],
  exports: [CardComponent, LabelPipe, SearchPipe, CustomDatepickerComponent],
})
export class SharedModule {}
