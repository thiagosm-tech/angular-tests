import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    UnsubscribeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class RxjsTestsModule { }
