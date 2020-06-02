import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent, SelectComponent],
  exports: [InputComponent, SelectComponent],
})
export class UiSharedModule {}
