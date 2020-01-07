import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module'
import { CategoryComponent } from './category.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    ShareModule,
    ProductModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule { }
