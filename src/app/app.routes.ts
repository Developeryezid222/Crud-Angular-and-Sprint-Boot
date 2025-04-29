import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { NgModule } from '@angular/core';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';


export const routes: Routes = [
    {path: '', component: CustomerListComponent},//http://localhost:4200/
    {path: 'customers/add', component: CustomerAddComponent},//http://localhost:4200/customers/add
    {path: 'customers/edit/:id', component: CustomerEditComponent},//http://localhost:4200/customers/edit{path: 'customers/add', component: CustomerAddComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})
export class AppRoutingModule { }