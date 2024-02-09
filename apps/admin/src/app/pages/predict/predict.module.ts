import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPredictComponent } from './list-predict/list-predict.component';

@NgModule({
  declarations: [ListPredictComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PredictModule {}
