import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { Routes, RouterModule } from '@angular/router';
import { AppModuleMaterials } from '../app.material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [TodoComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppModuleMaterials,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
