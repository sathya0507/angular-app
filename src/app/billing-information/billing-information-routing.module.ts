import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingInformationComponent } from '../billing-information/billing-information.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: BillingInformationComponent }];

@NgModule({
  declarations: [BillingInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class BillingInformationRoutingModule {}
