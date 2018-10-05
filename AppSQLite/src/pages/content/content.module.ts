import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContentPage } from './content';
import { ProductProvider } from '../../providers/database/product';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContentPage
  ],
  providers: [
    ProductProvider
  ]
})
export class ContentPageModule { }
