import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LabelPipe } from './pipes/label.pipe';

@NgModule({
  declarations: [CardComponent, LabelPipe],
  imports: [CommonModule],
  exports: [CardComponent, LabelPipe],
})
export class SharedModule {}
