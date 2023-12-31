import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { TodoComponent } from './todo/todo.component';
// import { BillingInformationComponent } from './billing-information/billing-information.component';

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
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo/todo-routing.module').then((c) => c.TodoRoutingModule),
  },
  {
    path: 'user',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./user-details/user-details-routing.module').then(
        (c) => c.UserDetailsRoutingModule
      ),
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./weather/weather-routing.module').then(
        (c) => c.WeatherRoutingModule
      ),
  },
  {
    path: 'state',
    loadChildren: () =>
      import('./state/state-routing.module').then((c) => c.StateRoutingModule),
  },

  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
