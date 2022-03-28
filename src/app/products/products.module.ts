import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
