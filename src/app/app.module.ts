import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TodoComponent } from './todo/todo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PropercasePipe } from './shared/pipes/propercase.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModuleMaterials } from './app.material.module';
// import { BillingInformationComponent } from './billing-information/billing-information.component';
import { HeaderComponent } from './core/component/header/header.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { HomeComponent } from './core/component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    TodoListComponent,
    PropercasePipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppModuleMaterials,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
