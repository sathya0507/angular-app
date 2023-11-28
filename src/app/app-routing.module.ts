import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponent } from './todo/todo.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((c) => c.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up-routing.module').then(
        (c) => c.SignUpRoutingModule
      ),
  },
  {
    path: 'billing',
    loadChildren: () =>
      import('./billing-information/billing-information-routing.module').then(
        (c) => c.BillingInformationRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
