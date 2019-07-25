import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ManageProductsComponent } from './manage-products.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
     ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ManageProductsRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule
  ],
  providers: [],
  exports: [ManageProductsComponent,
    ManageProductsRoutingModule,
  //AngularFireModule,AngularFireDatabaseModule,
  CommonModule
  ]
  
})
export class ManageProductsModule 
{

}
