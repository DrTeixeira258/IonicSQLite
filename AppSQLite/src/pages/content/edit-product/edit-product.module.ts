import { CategoryProvider } from './../../../providers/database/category';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductPage } from './edit-product';
import { ProductProvider } from '../../../providers/database/product';

@NgModule({
  declarations: [
    EditProductPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProductPage),
  ],
  providers: [
    ProductProvider,
    CategoryProvider
  ]
})
export class EditProductPageModule {}
