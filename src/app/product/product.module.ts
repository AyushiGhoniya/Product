import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module'
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ShareModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
