import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'new-client', component: ClientFormComponent },
  { path: 'edit-client/:id' , component: ClientFormComponent},
  { path: 'delete-client/:id' , component: ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }