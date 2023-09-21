import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LabelPipe } from './pipes/label.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [CardComponent, LabelPipe, SearchPipe],
  imports: [CommonModule],
  exports: [CardComponent, LabelPipe, SearchPipe],
})
export class SharedModule {}
