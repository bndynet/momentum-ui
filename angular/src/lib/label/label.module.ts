import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [LabelComponent],
  imports: [CommonModule],
  exports: [LabelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LabelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LabelModule,
      providers: [],
    };
  }
}
