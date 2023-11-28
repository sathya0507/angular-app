import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModuleMaterials } from '../app.material.module';

const routes: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AppModuleMaterials,
  ],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
